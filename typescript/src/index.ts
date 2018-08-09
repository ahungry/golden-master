import * as ts from 'typescript'
import * as fs from 'fs'
import * as p from 'process'
import * as R from 'ramda'

import { DocEntry, generateDocumentation } from './type_parser'
import { typeProvider } from './type_provider'
import { testGenerator } from './test_generator'

const genTargets = generateDocumentation(process.argv.slice(2), {
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS
})

const tests: string = testGenerator(genTargets, typeProvider)
console.log(tests)
