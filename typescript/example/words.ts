export const add = (a: string, b: string): string => a + b
export let add2 = (a: string, b: string): string => a + b
export var add3 = (a: string, b: string): string => a + b
export const add4 = (a: number, b: string): string => String(a) + b

var z = 9

export function adder (a: string, b: string): string {
  return add(a, b)
}

export class MyWords {
  public foo = 3
  public blub = (x: string): string => x

  constructor (private a: string = 'dog', private b: string = 'cat') {
  }

  public add () {
    return add(this.a, this.b)
  }
}

// console.log(add(1, 2))
