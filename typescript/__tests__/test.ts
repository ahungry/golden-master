
import * as SUT_example_math_ts from '../example/math.ts'

describe('example/math.ts', () => {
  
  describe('add', () => {

    it('Will match a known snapshot (2,-9).', async () => {
      var result = await SUT_example_math_ts.add(2,-9)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (8,8).', async () => {
      var result = await SUT_example_math_ts.add(8,8)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (8,-7).', async () => {
      var result = await SUT_example_math_ts.add(8,-7)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (6,-7).', async () => {
      var result = await SUT_example_math_ts.add(6,-7)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-5,8).', async () => {
      var result = await SUT_example_math_ts.add(-5,8)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (2,-5).', async () => {
      var result = await SUT_example_math_ts.add(2,-5)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-7,-9).', async () => {
      var result = await SUT_example_math_ts.add(-7,-9)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-7,6).', async () => {
      var result = await SUT_example_math_ts.add(-7,6)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (6,-7).', async () => {
      var result = await SUT_example_math_ts.add(6,-7)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (10,-7).', async () => {
      var result = await SUT_example_math_ts.add(10,-7)
      expect(result).toMatchSnapshot()
    })
  })

  describe('add2', () => {

    it('Will match a known snapshot (-7,-5).', async () => {
      var result = await SUT_example_math_ts.add2(-7,-5)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,2).', async () => {
      var result = await SUT_example_math_ts.add2(-1,2)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (2,6).', async () => {
      var result = await SUT_example_math_ts.add2(2,6)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (10,6).', async () => {
      var result = await SUT_example_math_ts.add2(10,6)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (8,6).', async () => {
      var result = await SUT_example_math_ts.add2(8,6)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (6,-7).', async () => {
      var result = await SUT_example_math_ts.add2(6,-7)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (6,-9).', async () => {
      var result = await SUT_example_math_ts.add2(6,-9)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (6,10).', async () => {
      var result = await SUT_example_math_ts.add2(6,10)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (8,-1).', async () => {
      var result = await SUT_example_math_ts.add2(8,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-5,-9).', async () => {
      var result = await SUT_example_math_ts.add2(-5,-9)
      expect(result).toMatchSnapshot()
    })
  })

  describe('add3', () => {

    it('Will match a known snapshot (-9,10).', async () => {
      var result = await SUT_example_math_ts.add3(-9,10)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-5,10).', async () => {
      var result = await SUT_example_math_ts.add3(-5,10)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (8,6).', async () => {
      var result = await SUT_example_math_ts.add3(8,6)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (2,2).', async () => {
      var result = await SUT_example_math_ts.add3(2,2)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-5,-5).', async () => {
      var result = await SUT_example_math_ts.add3(-5,-5)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (2,-9).', async () => {
      var result = await SUT_example_math_ts.add3(2,-9)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-3,8).', async () => {
      var result = await SUT_example_math_ts.add3(-3,8)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (2,2).', async () => {
      var result = await SUT_example_math_ts.add3(2,2)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,-5).', async () => {
      var result = await SUT_example_math_ts.add3(-1,-5)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (10,-3).', async () => {
      var result = await SUT_example_math_ts.add3(10,-3)
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyMath.blub', () => {

    it('Will match a known snapshot ("dog").', async () => {
      var My_MyMath = new SUT_example_math_ts.MyMath()
      var result = await My_MyMath.blub('dog')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("cat").', async () => {
      var My_MyMath = new SUT_example_math_ts.MyMath()
      var result = await My_MyMath.blub('cat')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish").', async () => {
      var My_MyMath = new SUT_example_math_ts.MyMath()
      var result = await My_MyMath.blub('fish')
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyMath.add', () => {

    it('Will match a known snapshot (undefined).', async () => {
      var My_MyMath = new SUT_example_math_ts.MyMath()
      var result = await My_MyMath.add(undefined)
      expect(result).toMatchSnapshot()
    })
  })

})

import * as SUT_example_words_ts from '../example/words.ts'

describe('example/words.ts', () => {
  
  describe('add', () => {

    it('Will match a known snapshot ("dog","dog").', async () => {
      var result = await SUT_example_words_ts.add('dog','dog')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("cat","cat").', async () => {
      var result = await SUT_example_words_ts.add('cat','cat')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","fish").', async () => {
      var result = await SUT_example_words_ts.add('fish','fish')
      expect(result).toMatchSnapshot()
    })
  })

  describe('add2', () => {

    it('Will match a known snapshot ("dog","dog").', async () => {
      var result = await SUT_example_words_ts.add2('dog','dog')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("cat","cat").', async () => {
      var result = await SUT_example_words_ts.add2('cat','cat')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","fish").', async () => {
      var result = await SUT_example_words_ts.add2('fish','fish')
      expect(result).toMatchSnapshot()
    })
  })

  describe('add3', () => {

    it('Will match a known snapshot ("dog","dog").', async () => {
      var result = await SUT_example_words_ts.add3('dog','dog')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("cat","cat").', async () => {
      var result = await SUT_example_words_ts.add3('cat','cat')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","fish").', async () => {
      var result = await SUT_example_words_ts.add3('fish','fish')
      expect(result).toMatchSnapshot()
    })
  })

  describe('add4', () => {

    it('Will match a known snapshot (2,"dog").', async () => {
      var result = await SUT_example_words_ts.add4(2,'dog')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (4,"cat").', async () => {
      var result = await SUT_example_words_ts.add4(4,'cat')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (10,"fish").', async () => {
      var result = await SUT_example_words_ts.add4(10,'fish')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-3,).', async () => {
      var result = await SUT_example_words_ts.add4(-3,)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (4,).', async () => {
      var result = await SUT_example_words_ts.add4(4,)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (4,).', async () => {
      var result = await SUT_example_words_ts.add4(4,)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-7,).', async () => {
      var result = await SUT_example_words_ts.add4(-7,)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-3,).', async () => {
      var result = await SUT_example_words_ts.add4(-3,)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (10,).', async () => {
      var result = await SUT_example_words_ts.add4(10,)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-3,).', async () => {
      var result = await SUT_example_words_ts.add4(-3,)
      expect(result).toMatchSnapshot()
    })
  })

  describe('adder', () => {

    it('Will match a known snapshot ("dog","dog").', async () => {
      var result = await SUT_example_words_ts.adder('dog','dog')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("cat","cat").', async () => {
      var result = await SUT_example_words_ts.adder('cat','cat')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","fish").', async () => {
      var result = await SUT_example_words_ts.adder('fish','fish')
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyWords.blub', () => {

    it('Will match a known snapshot ("dog").', async () => {
      var My_MyWords = new SUT_example_words_ts.MyWords()
      var result = await My_MyWords.blub('dog')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("cat").', async () => {
      var My_MyWords = new SUT_example_words_ts.MyWords()
      var result = await My_MyWords.blub('cat')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish").', async () => {
      var My_MyWords = new SUT_example_words_ts.MyWords()
      var result = await My_MyWords.blub('fish')
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyWords.add', () => {

    it('Will match a known snapshot (undefined).', async () => {
      var My_MyWords = new SUT_example_words_ts.MyWords()
      var result = await My_MyWords.add(undefined)
      expect(result).toMatchSnapshot()
    })
  })

})

