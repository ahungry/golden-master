
import * as SUT_example_math_ts from 'example/math.ts'

describe('example/math.ts', () => {
  
  describe('add', () => {
    it('Will match a known snapshot thanks to golden master.', async () => {
      const result = await add(5, 5)
      expect(result).toMatchSnapshot()
    })
  })

  describe('add2', () => {
    it('Will match a known snapshot thanks to golden master.', async () => {
      const result = await add2(5, 5)
      expect(result).toMatchSnapshot()
    })
  })

  describe('add3', () => {
    it('Will match a known snapshot thanks to golden master.', async () => {
      const result = await add3(5, 5)
      expect(result).toMatchSnapshot()
    })
  })

  describe('adder', () => {
    it('Will match a known snapshot thanks to golden master.', async () => {
      const result = await adder(5, 5)
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyMath.blub', () => {
    it('Will match a known snapshot thanks to golden master.', async () => {
      const result = await MyMath.blub('dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyMath.add', () => {
    it('Will match a known snapshot thanks to golden master.', async () => {
      const result = await MyMath.add()
      expect(result).toMatchSnapshot()
    })
  })

})

import * as SUT_example_words_ts from 'example/words.ts'

describe('example/words.ts', () => {
  
  describe('add', () => {
    it('Will match a known snapshot thanks to golden master.', async () => {
      const result = await add('dog', 'dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('add2', () => {
    it('Will match a known snapshot thanks to golden master.', async () => {
      const result = await add2('dog', 'dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('add3', () => {
    it('Will match a known snapshot thanks to golden master.', async () => {
      const result = await add3('dog', 'dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('adder', () => {
    it('Will match a known snapshot thanks to golden master.', async () => {
      const result = await adder('dog', 'dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyWords.blub', () => {
    it('Will match a known snapshot thanks to golden master.', async () => {
      const result = await MyWords.blub('dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyWords.add', () => {
    it('Will match a known snapshot thanks to golden master.', async () => {
      const result = await MyWords.add()
      expect(result).toMatchSnapshot()
    })
  })

})

