export const add = (a: number, b: number): number => a + b
export let add2 = (a: number, b: number): number => a + b
export var add3 = (a: number, b: number): number => a + b

var z = 9

export function adder (a: number, b: number): number {
  return add(a, b)
}

export class MyMath {
  public foo = 3
  public blub = (x: string): string => x

  constructor (private a: number = 1, private b: number = 2) {
  }

  public add () {
    return add(this.a, this.b)
  }
}

// console.log(add(1, 2))
