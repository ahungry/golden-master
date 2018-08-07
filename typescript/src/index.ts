import * as ts from 'typescript'
import * as fs from 'fs'

import { DocEntry, generateDocumentation } from './type_parser'

const genTargets = generateDocumentation(process.argv.slice(2), {
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS
})

console.log(genTargets)
