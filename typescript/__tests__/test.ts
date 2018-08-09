
import * as SUT_example_math_ts from '../example/math.ts'

describe('example/math.ts', () => {
  
  describe('add', () => {

    it('Will match a known snapshot (0,0).', async () => {
      var result = await SUT_example_math_ts.add(0,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,-1).', async () => {
      var result = await SUT_example_math_ts.add(0,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,1).', async () => {
      var result = await SUT_example_math_ts.add(0,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,NaN).', async () => {
      var result = await SUT_example_math_ts.add(0,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,42).', async () => {
      var result = await SUT_example_math_ts.add(0,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,42).', async () => {
      var result = await SUT_example_math_ts.add(0,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,42).', async () => {
      var result = await SUT_example_math_ts.add(0,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,0).', async () => {
      var result = await SUT_example_math_ts.add(-1,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,-1).', async () => {
      var result = await SUT_example_math_ts.add(-1,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,1).', async () => {
      var result = await SUT_example_math_ts.add(-1,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,NaN).', async () => {
      var result = await SUT_example_math_ts.add(-1,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,42).', async () => {
      var result = await SUT_example_math_ts.add(-1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,42).', async () => {
      var result = await SUT_example_math_ts.add(-1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,42).', async () => {
      var result = await SUT_example_math_ts.add(-1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,0).', async () => {
      var result = await SUT_example_math_ts.add(1,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,-1).', async () => {
      var result = await SUT_example_math_ts.add(1,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,1).', async () => {
      var result = await SUT_example_math_ts.add(1,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,NaN).', async () => {
      var result = await SUT_example_math_ts.add(1,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,42).', async () => {
      var result = await SUT_example_math_ts.add(1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,42).', async () => {
      var result = await SUT_example_math_ts.add(1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,42).', async () => {
      var result = await SUT_example_math_ts.add(1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,0).', async () => {
      var result = await SUT_example_math_ts.add(NaN,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,-1).', async () => {
      var result = await SUT_example_math_ts.add(NaN,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,1).', async () => {
      var result = await SUT_example_math_ts.add(NaN,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,NaN).', async () => {
      var result = await SUT_example_math_ts.add(NaN,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,42).', async () => {
      var result = await SUT_example_math_ts.add(NaN,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,42).', async () => {
      var result = await SUT_example_math_ts.add(NaN,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,42).', async () => {
      var result = await SUT_example_math_ts.add(NaN,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,0).', async () => {
      var result = await SUT_example_math_ts.add(42,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,-1).', async () => {
      var result = await SUT_example_math_ts.add(42,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,1).', async () => {
      var result = await SUT_example_math_ts.add(42,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,NaN).', async () => {
      var result = await SUT_example_math_ts.add(42,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,0).', async () => {
      var result = await SUT_example_math_ts.add(42,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,-1).', async () => {
      var result = await SUT_example_math_ts.add(42,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,1).', async () => {
      var result = await SUT_example_math_ts.add(42,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,NaN).', async () => {
      var result = await SUT_example_math_ts.add(42,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,0).', async () => {
      var result = await SUT_example_math_ts.add(42,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,-1).', async () => {
      var result = await SUT_example_math_ts.add(42,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,1).', async () => {
      var result = await SUT_example_math_ts.add(42,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,NaN).', async () => {
      var result = await SUT_example_math_ts.add(42,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add(42,42)
      expect(result).toMatchSnapshot()
    })
  })

  describe('add2', () => {

    it('Will match a known snapshot (0,0).', async () => {
      var result = await SUT_example_math_ts.add2(0,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,-1).', async () => {
      var result = await SUT_example_math_ts.add2(0,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,1).', async () => {
      var result = await SUT_example_math_ts.add2(0,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,NaN).', async () => {
      var result = await SUT_example_math_ts.add2(0,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,42).', async () => {
      var result = await SUT_example_math_ts.add2(0,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,42).', async () => {
      var result = await SUT_example_math_ts.add2(0,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,42).', async () => {
      var result = await SUT_example_math_ts.add2(0,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,0).', async () => {
      var result = await SUT_example_math_ts.add2(-1,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,-1).', async () => {
      var result = await SUT_example_math_ts.add2(-1,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,1).', async () => {
      var result = await SUT_example_math_ts.add2(-1,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,NaN).', async () => {
      var result = await SUT_example_math_ts.add2(-1,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,42).', async () => {
      var result = await SUT_example_math_ts.add2(-1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,42).', async () => {
      var result = await SUT_example_math_ts.add2(-1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,42).', async () => {
      var result = await SUT_example_math_ts.add2(-1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,0).', async () => {
      var result = await SUT_example_math_ts.add2(1,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,-1).', async () => {
      var result = await SUT_example_math_ts.add2(1,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,1).', async () => {
      var result = await SUT_example_math_ts.add2(1,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,NaN).', async () => {
      var result = await SUT_example_math_ts.add2(1,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,42).', async () => {
      var result = await SUT_example_math_ts.add2(1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,42).', async () => {
      var result = await SUT_example_math_ts.add2(1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,42).', async () => {
      var result = await SUT_example_math_ts.add2(1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,0).', async () => {
      var result = await SUT_example_math_ts.add2(NaN,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,-1).', async () => {
      var result = await SUT_example_math_ts.add2(NaN,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,1).', async () => {
      var result = await SUT_example_math_ts.add2(NaN,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,NaN).', async () => {
      var result = await SUT_example_math_ts.add2(NaN,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,42).', async () => {
      var result = await SUT_example_math_ts.add2(NaN,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,42).', async () => {
      var result = await SUT_example_math_ts.add2(NaN,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,42).', async () => {
      var result = await SUT_example_math_ts.add2(NaN,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,0).', async () => {
      var result = await SUT_example_math_ts.add2(42,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,-1).', async () => {
      var result = await SUT_example_math_ts.add2(42,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,1).', async () => {
      var result = await SUT_example_math_ts.add2(42,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,NaN).', async () => {
      var result = await SUT_example_math_ts.add2(42,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add2(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add2(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add2(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,0).', async () => {
      var result = await SUT_example_math_ts.add2(42,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,-1).', async () => {
      var result = await SUT_example_math_ts.add2(42,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,1).', async () => {
      var result = await SUT_example_math_ts.add2(42,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,NaN).', async () => {
      var result = await SUT_example_math_ts.add2(42,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add2(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add2(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add2(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,0).', async () => {
      var result = await SUT_example_math_ts.add2(42,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,-1).', async () => {
      var result = await SUT_example_math_ts.add2(42,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,1).', async () => {
      var result = await SUT_example_math_ts.add2(42,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,NaN).', async () => {
      var result = await SUT_example_math_ts.add2(42,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add2(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add2(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add2(42,42)
      expect(result).toMatchSnapshot()
    })
  })

  describe('add3', () => {

    it('Will match a known snapshot (0,0).', async () => {
      var result = await SUT_example_math_ts.add3(0,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,-1).', async () => {
      var result = await SUT_example_math_ts.add3(0,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,1).', async () => {
      var result = await SUT_example_math_ts.add3(0,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,NaN).', async () => {
      var result = await SUT_example_math_ts.add3(0,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,42).', async () => {
      var result = await SUT_example_math_ts.add3(0,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,42).', async () => {
      var result = await SUT_example_math_ts.add3(0,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,42).', async () => {
      var result = await SUT_example_math_ts.add3(0,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,0).', async () => {
      var result = await SUT_example_math_ts.add3(-1,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,-1).', async () => {
      var result = await SUT_example_math_ts.add3(-1,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,1).', async () => {
      var result = await SUT_example_math_ts.add3(-1,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,NaN).', async () => {
      var result = await SUT_example_math_ts.add3(-1,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,42).', async () => {
      var result = await SUT_example_math_ts.add3(-1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,42).', async () => {
      var result = await SUT_example_math_ts.add3(-1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,42).', async () => {
      var result = await SUT_example_math_ts.add3(-1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,0).', async () => {
      var result = await SUT_example_math_ts.add3(1,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,-1).', async () => {
      var result = await SUT_example_math_ts.add3(1,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,1).', async () => {
      var result = await SUT_example_math_ts.add3(1,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,NaN).', async () => {
      var result = await SUT_example_math_ts.add3(1,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,42).', async () => {
      var result = await SUT_example_math_ts.add3(1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,42).', async () => {
      var result = await SUT_example_math_ts.add3(1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,42).', async () => {
      var result = await SUT_example_math_ts.add3(1,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,0).', async () => {
      var result = await SUT_example_math_ts.add3(NaN,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,-1).', async () => {
      var result = await SUT_example_math_ts.add3(NaN,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,1).', async () => {
      var result = await SUT_example_math_ts.add3(NaN,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,NaN).', async () => {
      var result = await SUT_example_math_ts.add3(NaN,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,42).', async () => {
      var result = await SUT_example_math_ts.add3(NaN,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,42).', async () => {
      var result = await SUT_example_math_ts.add3(NaN,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,42).', async () => {
      var result = await SUT_example_math_ts.add3(NaN,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,0).', async () => {
      var result = await SUT_example_math_ts.add3(42,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,-1).', async () => {
      var result = await SUT_example_math_ts.add3(42,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,1).', async () => {
      var result = await SUT_example_math_ts.add3(42,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,NaN).', async () => {
      var result = await SUT_example_math_ts.add3(42,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add3(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add3(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add3(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,0).', async () => {
      var result = await SUT_example_math_ts.add3(42,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,-1).', async () => {
      var result = await SUT_example_math_ts.add3(42,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,1).', async () => {
      var result = await SUT_example_math_ts.add3(42,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,NaN).', async () => {
      var result = await SUT_example_math_ts.add3(42,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add3(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add3(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add3(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,0).', async () => {
      var result = await SUT_example_math_ts.add3(42,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,-1).', async () => {
      var result = await SUT_example_math_ts.add3(42,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,1).', async () => {
      var result = await SUT_example_math_ts.add3(42,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,NaN).', async () => {
      var result = await SUT_example_math_ts.add3(42,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add3(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add3(42,42)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,42).', async () => {
      var result = await SUT_example_math_ts.add3(42,42)
      expect(result).toMatchSnapshot()
    })
  })

  describe('pointDistance', () => {

    it('Will match a known snapshot ({ x: 1, y: 2 },{ x: 1, y: 2 }).', async () => {
      var result = await SUT_example_math_ts.pointDistance({ x: 1, y: 2 },{ x: 1, y: 2 })
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ({ x: 1, y: 2 },{ x: 3, y: 4 }).', async () => {
      var result = await SUT_example_math_ts.pointDistance({ x: 1, y: 2 },{ x: 3, y: 4 })
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ({ x: 3, y: 4 },{ x: 1, y: 2 }).', async () => {
      var result = await SUT_example_math_ts.pointDistance({ x: 3, y: 4 },{ x: 1, y: 2 })
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ({ x: 3, y: 4 },{ x: 3, y: 4 }).', async () => {
      var result = await SUT_example_math_ts.pointDistance({ x: 3, y: 4 },{ x: 3, y: 4 })
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyMath.blub', () => {
  })

  describe('MyMath.add', () => {
  })

})

import * as SUT_example_words_ts from '../example/words.ts'

describe('example/words.ts', () => {
  
  describe('add', () => {

    it('Will match a known snapshot ("a,b,c,d","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add('a,b,c,d','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("a,b,c,d","hello world").', async () => {
      var result = await SUT_example_words_ts.add('a,b,c,d','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("a,b,c,d","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add('a,b,c,d','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("a,b,c,d","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add('a,b,c,d','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add('hello world','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","hello world").', async () => {
      var result = await SUT_example_words_ts.add('hello world','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add('hello world','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add('hello world','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add('Matthew Carter','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","hello world").', async () => {
      var result = await SUT_example_words_ts.add('Matthew Carter','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add('Matthew Carter','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add('Matthew Carter','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add('tHiS iS sOmE cRaZy fOrMaT','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","hello world").', async () => {
      var result = await SUT_example_words_ts.add('tHiS iS sOmE cRaZy fOrMaT','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add('tHiS iS sOmE cRaZy fOrMaT','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add('tHiS iS sOmE cRaZy fOrMaT','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })
  })

  describe('add2', () => {

    it('Will match a known snapshot ("a,b,c,d","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add2('a,b,c,d','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("a,b,c,d","hello world").', async () => {
      var result = await SUT_example_words_ts.add2('a,b,c,d','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("a,b,c,d","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add2('a,b,c,d','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("a,b,c,d","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add2('a,b,c,d','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add2('hello world','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","hello world").', async () => {
      var result = await SUT_example_words_ts.add2('hello world','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add2('hello world','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add2('hello world','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add2('Matthew Carter','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","hello world").', async () => {
      var result = await SUT_example_words_ts.add2('Matthew Carter','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add2('Matthew Carter','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add2('Matthew Carter','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add2('tHiS iS sOmE cRaZy fOrMaT','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","hello world").', async () => {
      var result = await SUT_example_words_ts.add2('tHiS iS sOmE cRaZy fOrMaT','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add2('tHiS iS sOmE cRaZy fOrMaT','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add2('tHiS iS sOmE cRaZy fOrMaT','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })
  })

  describe('add3', () => {

    it('Will match a known snapshot ("a,b,c,d","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add3('a,b,c,d','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("a,b,c,d","hello world").', async () => {
      var result = await SUT_example_words_ts.add3('a,b,c,d','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("a,b,c,d","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add3('a,b,c,d','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("a,b,c,d","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add3('a,b,c,d','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add3('hello world','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","hello world").', async () => {
      var result = await SUT_example_words_ts.add3('hello world','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add3('hello world','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add3('hello world','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add3('Matthew Carter','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","hello world").', async () => {
      var result = await SUT_example_words_ts.add3('Matthew Carter','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add3('Matthew Carter','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add3('Matthew Carter','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add3('tHiS iS sOmE cRaZy fOrMaT','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","hello world").', async () => {
      var result = await SUT_example_words_ts.add3('tHiS iS sOmE cRaZy fOrMaT','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add3('tHiS iS sOmE cRaZy fOrMaT','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add3('tHiS iS sOmE cRaZy fOrMaT','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })
  })

  describe('add4', () => {

    it('Will match a known snapshot (0,"a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add4(0,'a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,"hello world").', async () => {
      var result = await SUT_example_words_ts.add4(0,'hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,"Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add4(0,'Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,"tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add4(0,'tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,"a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add4(-1,'a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,"hello world").', async () => {
      var result = await SUT_example_words_ts.add4(-1,'hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,"Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add4(-1,'Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,"tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add4(-1,'tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,"a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add4(1,'a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,"hello world").', async () => {
      var result = await SUT_example_words_ts.add4(1,'hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,"Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add4(1,'Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,"tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add4(1,'tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,"a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add4(NaN,'a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,"hello world").', async () => {
      var result = await SUT_example_words_ts.add4(NaN,'hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,"Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add4(NaN,'Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,"tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add4(NaN,'tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,"a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add4(42,'a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,"hello world").', async () => {
      var result = await SUT_example_words_ts.add4(42,'hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,"Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add4(42,'Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,"tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add4(42,'tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,"a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add4(42,'a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,"hello world").', async () => {
      var result = await SUT_example_words_ts.add4(42,'hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,"Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add4(42,'Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,"tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add4(42,'tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,"a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add4(42,'a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,"hello world").', async () => {
      var result = await SUT_example_words_ts.add4(42,'hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,"Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add4(42,'Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (42,"tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add4(42,'tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })
  })

  describe('adder', () => {

    it('Will match a known snapshot ("a,b,c,d","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.adder('a,b,c,d','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("a,b,c,d","hello world").', async () => {
      var result = await SUT_example_words_ts.adder('a,b,c,d','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("a,b,c,d","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.adder('a,b,c,d','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("a,b,c,d","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.adder('a,b,c,d','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.adder('hello world','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","hello world").', async () => {
      var result = await SUT_example_words_ts.adder('hello world','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.adder('hello world','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("hello world","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.adder('hello world','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.adder('Matthew Carter','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","hello world").', async () => {
      var result = await SUT_example_words_ts.adder('Matthew Carter','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.adder('Matthew Carter','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("Matthew Carter","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.adder('Matthew Carter','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.adder('tHiS iS sOmE cRaZy fOrMaT','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","hello world").', async () => {
      var result = await SUT_example_words_ts.adder('tHiS iS sOmE cRaZy fOrMaT','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.adder('tHiS iS sOmE cRaZy fOrMaT','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.adder('tHiS iS sOmE cRaZy fOrMaT','tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })
  })

  describe('MyWords.blub', () => {
  })

  describe('MyWords.add', () => {
  })

})

