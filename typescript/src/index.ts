import * as ts from 'typescript'
import * as fs from 'fs'
import * as p from 'process'
import * as R from 'ramda'

import { DocEntry, generateDocumentation } from './type_parser'

const genTargets = generateDocumentation(process.argv.slice(2), {
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS
})

const getRandomNumber = (): number => {
  // Simpler to read test numbers for demo purposes.
  let base = Math.floor(Math.random() * 10) + 1

  if (base % 2) base *= -1

  return base
}

// console.log(genTargets)
// Loop across all our filenames, making some nice test file.
const files = Object.keys(genTargets)

let out = ''

const getCleanFn = (s: string): string => s.replace(/[^A-Za-z]/g, '_')
const isMethod = (d: DocEntry): boolean => /^.*\..*$/.test(String(d.name))
const getMethodClass = (d: DocEntry): string => String(d.name).split('.')[0]
const getArgs = (d: DocEntry): RegExpMatchArray | null => String(d.type).match(/^(\(.*?\))/)

files.map((fn) => {
  const cleanFn = getCleanFn(fn)
  let fnTestOut = ''

  // Now, grab all the names we need to test on.
  genTargets[fn].map((doc: DocEntry) => {
    let instance = ''

    if (isMethod(doc)) {
      // console.log('Found the method')
      const className = getMethodClass(doc)
      instance = `var My_${className} = new SUT_${cleanFn}.${className}()`
    }

    // Pluck apart the type signature - TODO: Lookup more complex types.
    const m = getArgs(doc)

    if (m === null || m.length < 1) return

    const params = m[1].split(',').map((p) => p.split(':')).map((t) => {
      switch (true) {
        case /number/.test(t[1]): return getRandomNumber()
        case /string/.test(t[1]): return "'dog'"
        default: return null
      }
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

console.log(out)
