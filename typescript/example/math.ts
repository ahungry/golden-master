export const add = (a: number, b: number): number => a + b
export let add2 = (a: number, b: number): number => a + b
export var add3 = (a: number, b: number): number => a + b

var z = 9

function adder (a: number, b: number): number {
  return add(a, b)
}

export interface Point {
  x: number
  y: number
}

// Good ol Pythagorean
export function pointDistance (p1: Point, p2: Point) {
  const a = Math.abs(p1.x - p2.x)
  const b = Math.abs(p1.y - p2.y)
  const c = Math.sqrt(a + b)

  return c
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
