import * as R from 'ramda'

import { DocEntry } from './type_parser'
import { TypeProvider } from './type_provider'

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

      const params = m[1].split(',').map((p) => p.split(':')).map((t) => {
        const paramType = String(t[1]).replace(/[^A-Za-z_0-9]/g, '').trim()

        return typeProvider[paramType] === undefined
          ? typeProvider['default']()[0] : typeProvider[paramType]()[0]
      }).join(', ')

      let prefix = instance.length > 0 ? 'My_' : `SUT_${cleanFn}.`

      fnTestOut += `
  describe('${doc.name}', () => {
    it('Will match a known snapshot thanks to golden master (${params.replace(/'/g, '"')}).', async () => {
      ${instance}
      var result = await ${prefix}${doc.name}(${params})
      expect(result).toMatchSnapshot()
    })
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
