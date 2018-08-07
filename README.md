# Golden Master - Automatic Characteristic Test Generator

Right now working on Typescript.

This will auto-generate character tests that can be used for
future-proofing/regression testing a codebase with little work from
the developer.

## Huh??

Ok, lets just show with a simple sample - given you had a code base
such as this:

```typescript
export const add = (a: number, b: number): number => a + b
export let add2 = (a: number, b: number): number => a + b
export var add3 = (a: number, b: number): number => a + b

function adder (a: number, b: number): number {
  return add(a, b)
}

```

this tool will produce a Jest test file as such:

```typescript

import * as SUT_example_math_ts from '../example/math.ts'

describe('example/math.ts', () => {

  describe('add', () => {
    it('Will match a known snapshot thanks to golden master (8, -5).', async () => {
      const result = await SUT_example_math_ts.add(8, -5)
      expect(result).toMatchSnapshot()
    })
  })

  describe('add2', () => {
    it('Will match a known snapshot thanks to golden master (4, -9).', async () => {
      const result = await SUT_example_math_ts.add2(4, -9)
      expect(result).toMatchSnapshot()
    })
  })

  describe('add3', () => {
    it('Will match a known snapshot thanks to golden master (2, 4).', async () => {
      const result = await SUT_example_math_ts.add3(2, 4)
      expect(result).toMatchSnapshot()
    })
  })

  describe('adder', () => {
    it('Will match a known snapshot thanks to golden master (6, -5).', async () => {
      const result = await SUT_example_math_ts.adder(6, -5)
      expect(result).toMatchSnapshot()
    })
  })

})


```

# License

GPLv3 or later

# Copyright

Matthew Carter <m@ahungry.com>
