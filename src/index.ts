import * as ts from 'typescript'
import * as fs from 'fs'

import { generateDocumentation } from './type_parser'

generateDocumentation(process.argv.slice(2), {
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS
})
