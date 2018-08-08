
import * as SUT_example_math_ts from '../example/math.ts'

describe('example/math.ts', () => {
  
  describe('add', () => {
    it('Will match a known snapshot thanks to golden master (-3, -3).', async () => {
      
      var result = await SUT_example_math_ts.add(-3, -3)
      expect(result).toMatchSnapshot()
    })
  })

  describe('add2', () => {
    it('Will match a known snapshot thanks to golden master (10, 4).', async () => {
      
      var result = await SUT_example_math_ts.add2(10, 4)
      expect(result).toMatchSnapshot()
    })
  })

  describe('add3', () => {
    it('Will match a known snapshot thanks to golden master (2, 10).', async () => {
      
      var result = await SUT_example_math_ts.add3(2, 10)
      expect(result).toMatchSnapshot()
    })
  })

  describe('adder', () => {
    it('Will match a known snapshot thanks to golden master (-7, 10).', async () => {
      
      var result = await SUT_example_math_ts.adder(-7, 10)
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

