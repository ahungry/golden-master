export interface TypeProvider {
  [key: string]: () => Array<string>
}

const getRandomNumber = (): number => {
  // Simpler to read test numbers for demo purposes.
  let base = Math.floor(Math.random() * 10000) + 1

  if (base % 2) base *= -1

  return base
}

const getRandomNumbers = (): string[] => {
  // Return some known good testables
  let nums: number[] = [0, -1, 1, NaN]

  // Do a couple randoms in here as well
  for (let i = 0; i < 3; i++) {
    // For now, disabling random generation so we can easily follow
    // the generated diff - but if you use this, maybe you want to test.
    // nums.push(getRandomNumber())
    nums.push(42)
  }

  return nums.map(n => String(n))
}

// We could return a variety of strings, lower and upper, space separated
// Basically, common test conventions of things we would expect to see formatted.
// For now, make sure to single quote the string value.
const getString = (): string[] => {
  return [
    "'a,b,c,d'",
    "'hello world'",
    "'Matthew Carter'",
    "'tHiS iS sOmE cRaZy fOrMaT'",
  ]
}

export interface Point {
  x: number
  y: number
}

// Remember - these should be able to interpolate as literal objects,
// so here they need to be the string quoted object literal.
// Maybe it could be a function call to pull it in dynamically,
// and we can allow user supplied imports at the top of test file to
// assist with this.
const getToThePointAlready = (): string[] => {
  return [
    '{ x: 1, y: 2 }',
    '{ x: 3, y: 4 }',
  ]
}

export const typeProvider: TypeProvider = {
  default: () => ['undefined'],
  number: getRandomNumbers,
  Point: getToThePointAlready,
  string: getString,
}
