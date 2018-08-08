
import * as SUT_example_math_ts from '../example/math.ts'

describe('example/math.ts', () => {
  
  describe('add', () => {
    it('Will match a known snapshot thanks to golden master (4, -9).', async () => {
      const result = await SUT_example_math_ts.add(4, -9)
      expect(result).toMatchSnapshot()
    })
  })

  describe('add2', () => {
    it('Will match a known snapshot thanks to golden master (10, -5).', async () => {
      const result = await SUT_example_math_ts.add2(10, -5)
      expect(result).toMatchSnapshot()
    })
  })

  describe('add3', () => {
    it('Will match a known snapshot thanks to golden master (-5, 8).', async () => {
      const result = await SUT_example_math_ts.add3(-5, 8)
      expect(result).toMatchSnapshot()
    })
  })

  describe('adder', () => {
    it('Will match a known snapshot thanks to golden master (8, 4).', async () => {
      const result = await SUT_example_math_ts.adder(8, 4)
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyMath.blub', () => {
    it('Will match a known snapshot thanks to golden master ("dog").', async () => {
      const result = await SUT_example_math_ts.MyMath.blub('dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyMath.add', () => {
    it('Will match a known snapshot thanks to golden master ().', async () => {
      const result = await SUT_example_math_ts.MyMath.add()
      expect(result).toMatchSnapshot()
    })
  })

})

import * as SUT_example_words_ts from '../example/words.ts'

describe('example/words.ts', () => {
  
  describe('add', () => {
    it('Will match a known snapshot thanks to golden master ("dog", "dog").', async () => {
      const result = await SUT_example_words_ts.add('dog', 'dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('add2', () => {
    it('Will match a known snapshot thanks to golden master ("dog", "dog").', async () => {
      const result = await SUT_example_words_ts.add2('dog', 'dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('add3', () => {
    it('Will match a known snapshot thanks to golden master ("dog", "dog").', async () => {
      const result = await SUT_example_words_ts.add3('dog', 'dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('adder', () => {
    it('Will match a known snapshot thanks to golden master ("dog", "dog").', async () => {
      const result = await SUT_example_words_ts.adder('dog', 'dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyWords.blub', () => {
    it('Will match a known snapshot thanks to golden master ("dog").', async () => {
      const result = await SUT_example_words_ts.MyWords.blub('dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyWords.add', () => {
    it('Will match a known snapshot thanks to golden master ().', async () => {
      const result = await SUT_example_words_ts.MyWords.add()
      expect(result).toMatchSnapshot()
    })
  })

})

