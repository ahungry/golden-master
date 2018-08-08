
import * as SUT_example_math_ts from '../example/math.ts'

describe('example/math.ts', () => {
  
  describe('add', () => {
    it('Will match a known snapshot thanks to golden master (8, 2).', async () => {
      
      var result = await SUT_example_math_ts.add(8, 2)
      expect(result).toMatchSnapshot()
    })
  })

  describe('add2', () => {
    it('Will match a known snapshot thanks to golden master (6, -5).', async () => {
      
      var result = await SUT_example_math_ts.add2(6, -5)
      expect(result).toMatchSnapshot()
    })
  })

  describe('add3', () => {
    it('Will match a known snapshot thanks to golden master (10, -9).', async () => {
      
      var result = await SUT_example_math_ts.add3(10, -9)
      expect(result).toMatchSnapshot()
    })
  })

  describe('adder', () => {
    it('Will match a known snapshot thanks to golden master (6, -7).', async () => {
      
      var result = await SUT_example_math_ts.adder(6, -7)
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyMath.blub', () => {
    it('Will match a known snapshot thanks to golden master ("dog").', async () => {
      var My_MyMath = new SUT_example_math_ts.MyMath()
      var result = await My_MyMath.blub('dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyMath.add', () => {
    it('Will match a known snapshot thanks to golden master ().', async () => {
      var My_MyMath = new SUT_example_math_ts.MyMath()
      var result = await My_MyMath.add()
      expect(result).toMatchSnapshot()
    })
  })

})

import * as SUT_example_words_ts from '../example/words.ts'

describe('example/words.ts', () => {
  
  describe('add', () => {
    it('Will match a known snapshot thanks to golden master ("dog", "dog").', async () => {
      
      var result = await SUT_example_words_ts.add('dog', 'dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('add2', () => {
    it('Will match a known snapshot thanks to golden master ("dog", "dog").', async () => {
      
      var result = await SUT_example_words_ts.add2('dog', 'dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('add3', () => {
    it('Will match a known snapshot thanks to golden master ("dog", "dog").', async () => {
      
      var result = await SUT_example_words_ts.add3('dog', 'dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('adder', () => {
    it('Will match a known snapshot thanks to golden master ("dog", "dog").', async () => {
      
      var result = await SUT_example_words_ts.adder('dog', 'dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyWords.blub', () => {
    it('Will match a known snapshot thanks to golden master ("dog").', async () => {
      var My_MyWords = new SUT_example_words_ts.MyWords()
      var result = await My_MyWords.blub('dog')
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyWords.add', () => {
    it('Will match a known snapshot thanks to golden master ().', async () => {
      var My_MyWords = new SUT_example_words_ts.MyWords()
      var result = await My_MyWords.add()
      expect(result).toMatchSnapshot()
    })
  })

})

