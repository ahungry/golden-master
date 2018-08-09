import * as p from 'process'
import * as R from 'ramda'

import { DocEntry } from './type_parser'
import { TypeProvider } from './type_provider'
import { powerSet } from './powerset'

const getCleanFn = (s: string): string => s.replace(/[^A-Za-z]/g, '_')
const isMethod = (d: DocEntry): boolean => /^.*\..*$/.test(String(d.name))
const getMethodClass = (d: DocEntry): string => String(d.name).split('.')[0]
const getArgs = (d: DocEntry): RegExpMatchArray | null => String(d.type).match(/^(\(.*?\))/)

// Loop across all our filenames, making some nice test file.
export const testGenerator = (
  genTargets: { [key: string]: DocEntry[] },
  typeProvider: TypeProvider,
): string => {
  const files = Object.keys(genTargets)

  let out = ''

  files.map((fn) => {
    const cleanFn = getCleanFn(fn)
    let fnTestOut = ''

    // Now, grab all the names we need to test on.
    genTargets[fn].map((doc: DocEntry) => {
      let instance = ''

      if (isMethod(doc)) {
        // TODO: Query out the source class for the constructor args.
        const className = getMethodClass(doc)
        instance = `var My_${className} = new SUT_${cleanFn}.${className}()`
      }

      // Pluck apart the type signature - TODO: Lookup more complex types.
      const m = getArgs(doc)

      if (m === null || m.length < 1) return

      fnTestOut += `
  describe('${doc.name}', () => {`

      // We should find the arg map of all types and loop over them for test cases.
      const params = m[1].split(',').map((p) => p.split(':')).map((t) => {
        const paramType = String(t[1]).replace(/[^A-Za-z_0-9]/g, '').trim()

        return paramType
      })

      // Now, we have an array of the types going in, we should build an 'it' for all combos.
      const slotValues: Array<Array<any>> = []

      for (let c = 0; c < params.length; c++) {
        const pType = params[c]

        slotValues.push(typeProvider[pType] === undefined
          ? typeProvider['default']()
          : typeProvider[pType]())
      }

      const pSet = powerSet(slotValues)
      const itGen = (args: any[]): string => {
        let argString = args.join(',')
        let prefix = instance.length > 0 ? 'My_' : `SUT_${cleanFn}.`
        let nl = instance.length > 0 ? '\n      ' : ''

        return `

    it('Will match a known snapshot (${argString.replace(/'/g, '"')}).', async () => {
      ${instance}${nl}var result = await ${prefix}${doc.name}(${argString})
      expect(result).toMatchSnapshot()
    })`
      }

      fnTestOut += R.map(itGen, pSet).join('')
      fnTestOut += `
  })
`
    })

    // TODO: Make the dot prefix user based for relative paths
    out += `
import * as SUT_${cleanFn} from '../${fn}'

describe('${fn}', () => {
  ${fnTestOut}
})
`
  })

  return out
}
