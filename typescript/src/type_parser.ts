// https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API
import * as ts from 'typescript'
import * as fs from 'fs'
import * as p from 'process'

export interface DocEntry {
  name?: string
  fileName?: string
  documentation?: string
  type?: string
  constructors?: DocEntry[]
  parameters?: DocEntry[]
  returnType?: string
}

/** Generate documentation for all classes in a set of .ts files */
export function generateDocumentation (
  fileNames: string[],
  options: ts.CompilerOptions
): { [key: string]: DocEntry[] } {
  // Build a program using the set of root file names in fileNames
  let program = ts.createProgram(fileNames, options)

  // Get the checker, we will use it to find more about classes
  let checker = program.getTypeChecker()

  let outputMap: { [key: string]: DocEntry[] } = {}
  let output: DocEntry[] = []

  // Visit every sourceFile in the program
  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      // Walk the tree to search for classes
      ts.forEachChild(sourceFile, visit)
      outputMap[sourceFile.fileName] = output
      output = []
    }
  }

  // print out the doc
  fs.writeFileSync('classes.json', JSON.stringify(outputMap, undefined, 4))

  return outputMap

  /** visit nodes finding exported classes */
  function visit (node: ts.Node, namePrefix: string = '') {
    // Only consider exported nodes (comment out to include class methods)
    if (!isNodeExported(node)) {
      return
    }

    if (ts.isClassDeclaration(node) && node.name) {
      // This is a top level class, get its symbol
      let symbol = checker.getSymbolAtLocation(node.name)
      if (symbol) {
        const s = serializeClass(symbol)
        output.push(s)
        namePrefix += String(s.name)
      }
    } else if (ts.isPropertyDeclaration(node) || ts.isMethodDeclaration(node)) {
      let symbol = checker.getSymbolAtLocation(node.name)
      if (symbol) {
        const s = serializeClass(symbol)
        s.name = namePrefix + '.' + s.name
        output.push(s)
      }
    } else if ((ts.isVariableDeclaration(node) || ts.isFunctionDeclaration(node)) && node.name) {
      let symbol = checker.getSymbolAtLocation(node.name)
      if (symbol) {
        output.push(serializeClass(symbol))
      }
    } else if (ts.isModuleDeclaration(node)) {
      // This is a namespace, visit its children
      ts.forEachChild(node, visit)
    }

    const fn = (n: any) => visit(n, namePrefix)
    ts.forEachChild(node, fn)
  }

  /** Serialize a symbol into a json object */
  function serializeSymbol (symbol: ts.Symbol): DocEntry {
    return {
      name: symbol.getName(),
      documentation: ts.displayPartsToString(symbol.getDocumentationComment(undefined)),
      type: checker.typeToString(
        checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration!)
      )
    }
  }

  /** Serialize a class symbol information */
  function serializeClass (symbol: ts.Symbol) {
    let details = serializeSymbol(symbol)

    // Get the construct signatures
    let constructorType = checker.getTypeOfSymbolAtLocation(
      symbol,
      symbol.valueDeclaration!
    )
    details.constructors = constructorType
      .getConstructSignatures()
      .map(serializeSignature)
    return details
  }

  /** Serialize a signature (call or construct) */
  function serializeSignature (signature: ts.Signature) {
    return {
      parameters: signature.parameters.map(serializeSymbol),
      returnType: checker.typeToString(signature.getReturnType()),
      documentation: ts.displayPartsToString(signature.getDocumentationComment(undefined))
    }
  }

  /** True if this is visible outside this file, false otherwise */
  function isNodeExported (node: ts.Node): boolean {
    return (
      // If the node itself is exported
      (ts.getCombinedModifierFlags(node as any) & ts.ModifierFlags.Export) !== 0 ||
      // Or its got a parent of class declaration type that is exported
      (!!node.parent && node.parent.kind === ts.SyntaxKind.ClassDeclaration &&
        (ts.getCombinedModifierFlags(node.parent as any) & ts.ModifierFlags.Export) !== 0)
    )
    // This doesn't seem to work, it was from the sample
    // (ts.getCombinedModifierFlags(node as any) & ts.ModifierFlags.Export) !== 0 ||
    // (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
  }
}
