export interface TypeProvider {
  [key: string]: () => Array<any>
}

const getRandomNumber = (): number => {
  // Simpler to read test numbers for demo purposes.
  let base = Math.floor(Math.random() * 10000) + 1

  if (base % 2) base *= -1

  return base
}

const getRandomNumbers = (): number[] => {
  // Return some known good testables
  let nums: number[] = [0, -1, 1, NaN]

  // Do a couple randoms in here as well
  for (let i = 0; i < 3; i++) {
    nums.push(getRandomNumber())
  }

  return nums
}

// We could return a variety of strings, lower and upper, space separated
// Basically, common test conventions of things we would expect to see formatted.
// For now, make sure to single quote the string value.
const getString = (): string[] => {
  return [
    "'a,b,c,d'",
    "'hello world'",
    "'fish'",
    "'Matthew Carter'",
    "'tHiS iS sOmE cRaZy fOrMaT'",
  ]
}

export const typeProvider: TypeProvider = {
  default: () => ['undefined'],
  number: getRandomNumbers,
  string: getString,
}
