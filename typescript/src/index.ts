import * as ts from 'typescript'
import * as fs from 'fs'
import * as p from 'process'

import { DocEntry, generateDocumentation } from './type_parser'

const genTargets = generateDocumentation(process.argv.slice(2), {
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS
})

const getRandomNumber = (): number => {
  let base = Math.random() * 10000000

  if (base % 2) base *= -1

  return base
}

// console.log(genTargets)
// Loop across all our filenames, making some nice test file.
const files = Object.keys(genTargets)

let out = ''

files.map((fn) => {
  const cleanFn = fn.replace(/[^A-Za-z]/g, '_')
  let fnTestOut = ''

  // Now, grab all the names we need to test on.
  genTargets[fn].map((doc: DocEntry) => {
    // Pluck apart the type signature - TODO: Lookup more complex types.
    const m = String(doc.type).match(/^(\(.*?\))/)

    if (m === null || m.length < 1) return

    const params = m[1].split(',').map((p) => p.split(':')).map((t) => {
      switch (true) {
        case /number/.test(t[1]): return getRandomNumber()
        case /string/.test(t[1]): return "'dog'"
        default: return null
      }
    }).join(', ')


    fnTestOut += `
  describe('${doc.name}', () => {
    it('Will match a known snapshot thanks to golden master (${params.replace(/'/g, '"')}).', async () => {
      const result = await SUT_${cleanFn}.${doc.name}(${params})
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
