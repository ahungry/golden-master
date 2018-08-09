export interface TypeProvider {
  [key: string]: () => Array<any>
}

const getRandomNumber = (): number => {
  // Simpler to read test numbers for demo purposes.
  let base = Math.floor(Math.random() * 10) + 1

  if (base % 2) base *= -1

  return base
}

const getRandomNumbers = (): number[] => {
  let nums: number[] = []
  for (let i = 0; i < 10; i++) {
    nums.push(getRandomNumber())
  }

  return nums
}

const getString = (): string[] => {
  return ["'dog'", "'cat'", "'fish'"]
}

export const typeProvider: TypeProvider = {
  default: () => ['undefined'],
  number: getRandomNumbers,
  string: getString,
}
