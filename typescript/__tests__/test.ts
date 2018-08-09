
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

    it('Will match a known snapshot (0,-1101).', async () => {
      var result = await SUT_example_math_ts.add(0,-1101)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,-1821).', async () => {
      var result = await SUT_example_math_ts.add(0,-1821)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,7016).', async () => {
      var result = await SUT_example_math_ts.add(0,7016)
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

    it('Will match a known snapshot (-1,-1101).', async () => {
      var result = await SUT_example_math_ts.add(-1,-1101)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,-1821).', async () => {
      var result = await SUT_example_math_ts.add(-1,-1821)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,7016).', async () => {
      var result = await SUT_example_math_ts.add(-1,7016)
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

    it('Will match a known snapshot (1,-1101).', async () => {
      var result = await SUT_example_math_ts.add(1,-1101)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,-1821).', async () => {
      var result = await SUT_example_math_ts.add(1,-1821)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,7016).', async () => {
      var result = await SUT_example_math_ts.add(1,7016)
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

    it('Will match a known snapshot (NaN,-1101).', async () => {
      var result = await SUT_example_math_ts.add(NaN,-1101)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,-1821).', async () => {
      var result = await SUT_example_math_ts.add(NaN,-1821)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,7016).', async () => {
      var result = await SUT_example_math_ts.add(NaN,7016)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1910,0).', async () => {
      var result = await SUT_example_math_ts.add(1910,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1910,-1).', async () => {
      var result = await SUT_example_math_ts.add(1910,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1910,1).', async () => {
      var result = await SUT_example_math_ts.add(1910,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1910,NaN).', async () => {
      var result = await SUT_example_math_ts.add(1910,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1910,-1101).', async () => {
      var result = await SUT_example_math_ts.add(1910,-1101)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1910,-1821).', async () => {
      var result = await SUT_example_math_ts.add(1910,-1821)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1910,7016).', async () => {
      var result = await SUT_example_math_ts.add(1910,7016)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (2314,0).', async () => {
      var result = await SUT_example_math_ts.add(2314,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (2314,-1).', async () => {
      var result = await SUT_example_math_ts.add(2314,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (2314,1).', async () => {
      var result = await SUT_example_math_ts.add(2314,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (2314,NaN).', async () => {
      var result = await SUT_example_math_ts.add(2314,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (2314,-1101).', async () => {
      var result = await SUT_example_math_ts.add(2314,-1101)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (2314,-1821).', async () => {
      var result = await SUT_example_math_ts.add(2314,-1821)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (2314,7016).', async () => {
      var result = await SUT_example_math_ts.add(2314,7016)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (8272,0).', async () => {
      var result = await SUT_example_math_ts.add(8272,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (8272,-1).', async () => {
      var result = await SUT_example_math_ts.add(8272,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (8272,1).', async () => {
      var result = await SUT_example_math_ts.add(8272,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (8272,NaN).', async () => {
      var result = await SUT_example_math_ts.add(8272,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (8272,-1101).', async () => {
      var result = await SUT_example_math_ts.add(8272,-1101)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (8272,-1821).', async () => {
      var result = await SUT_example_math_ts.add(8272,-1821)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (8272,7016).', async () => {
      var result = await SUT_example_math_ts.add(8272,7016)
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

    it('Will match a known snapshot (0,-6389).', async () => {
      var result = await SUT_example_math_ts.add2(0,-6389)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,9044).', async () => {
      var result = await SUT_example_math_ts.add2(0,9044)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,2256).', async () => {
      var result = await SUT_example_math_ts.add2(0,2256)
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

    it('Will match a known snapshot (-1,-6389).', async () => {
      var result = await SUT_example_math_ts.add2(-1,-6389)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,9044).', async () => {
      var result = await SUT_example_math_ts.add2(-1,9044)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,2256).', async () => {
      var result = await SUT_example_math_ts.add2(-1,2256)
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

    it('Will match a known snapshot (1,-6389).', async () => {
      var result = await SUT_example_math_ts.add2(1,-6389)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,9044).', async () => {
      var result = await SUT_example_math_ts.add2(1,9044)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,2256).', async () => {
      var result = await SUT_example_math_ts.add2(1,2256)
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

    it('Will match a known snapshot (NaN,-6389).', async () => {
      var result = await SUT_example_math_ts.add2(NaN,-6389)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,9044).', async () => {
      var result = await SUT_example_math_ts.add2(NaN,9044)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,2256).', async () => {
      var result = await SUT_example_math_ts.add2(NaN,2256)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (4430,0).', async () => {
      var result = await SUT_example_math_ts.add2(4430,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (4430,-1).', async () => {
      var result = await SUT_example_math_ts.add2(4430,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (4430,1).', async () => {
      var result = await SUT_example_math_ts.add2(4430,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (4430,NaN).', async () => {
      var result = await SUT_example_math_ts.add2(4430,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (4430,-6389).', async () => {
      var result = await SUT_example_math_ts.add2(4430,-6389)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (4430,9044).', async () => {
      var result = await SUT_example_math_ts.add2(4430,9044)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (4430,2256).', async () => {
      var result = await SUT_example_math_ts.add2(4430,2256)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1998,0).', async () => {
      var result = await SUT_example_math_ts.add2(1998,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1998,-1).', async () => {
      var result = await SUT_example_math_ts.add2(1998,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1998,1).', async () => {
      var result = await SUT_example_math_ts.add2(1998,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1998,NaN).', async () => {
      var result = await SUT_example_math_ts.add2(1998,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1998,-6389).', async () => {
      var result = await SUT_example_math_ts.add2(1998,-6389)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1998,9044).', async () => {
      var result = await SUT_example_math_ts.add2(1998,9044)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1998,2256).', async () => {
      var result = await SUT_example_math_ts.add2(1998,2256)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-2107,0).', async () => {
      var result = await SUT_example_math_ts.add2(-2107,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-2107,-1).', async () => {
      var result = await SUT_example_math_ts.add2(-2107,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-2107,1).', async () => {
      var result = await SUT_example_math_ts.add2(-2107,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-2107,NaN).', async () => {
      var result = await SUT_example_math_ts.add2(-2107,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-2107,-6389).', async () => {
      var result = await SUT_example_math_ts.add2(-2107,-6389)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-2107,9044).', async () => {
      var result = await SUT_example_math_ts.add2(-2107,9044)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-2107,2256).', async () => {
      var result = await SUT_example_math_ts.add2(-2107,2256)
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

    it('Will match a known snapshot (0,-9333).', async () => {
      var result = await SUT_example_math_ts.add3(0,-9333)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,-3203).', async () => {
      var result = await SUT_example_math_ts.add3(0,-3203)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (0,-9471).', async () => {
      var result = await SUT_example_math_ts.add3(0,-9471)
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

    it('Will match a known snapshot (-1,-9333).', async () => {
      var result = await SUT_example_math_ts.add3(-1,-9333)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,-3203).', async () => {
      var result = await SUT_example_math_ts.add3(-1,-3203)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-1,-9471).', async () => {
      var result = await SUT_example_math_ts.add3(-1,-9471)
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

    it('Will match a known snapshot (1,-9333).', async () => {
      var result = await SUT_example_math_ts.add3(1,-9333)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,-3203).', async () => {
      var result = await SUT_example_math_ts.add3(1,-3203)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1,-9471).', async () => {
      var result = await SUT_example_math_ts.add3(1,-9471)
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

    it('Will match a known snapshot (NaN,-9333).', async () => {
      var result = await SUT_example_math_ts.add3(NaN,-9333)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,-3203).', async () => {
      var result = await SUT_example_math_ts.add3(NaN,-3203)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (NaN,-9471).', async () => {
      var result = await SUT_example_math_ts.add3(NaN,-9471)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-601,0).', async () => {
      var result = await SUT_example_math_ts.add3(-601,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-601,-1).', async () => {
      var result = await SUT_example_math_ts.add3(-601,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-601,1).', async () => {
      var result = await SUT_example_math_ts.add3(-601,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-601,NaN).', async () => {
      var result = await SUT_example_math_ts.add3(-601,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-601,-9333).', async () => {
      var result = await SUT_example_math_ts.add3(-601,-9333)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-601,-3203).', async () => {
      var result = await SUT_example_math_ts.add3(-601,-3203)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-601,-9471).', async () => {
      var result = await SUT_example_math_ts.add3(-601,-9471)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (5488,0).', async () => {
      var result = await SUT_example_math_ts.add3(5488,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (5488,-1).', async () => {
      var result = await SUT_example_math_ts.add3(5488,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (5488,1).', async () => {
      var result = await SUT_example_math_ts.add3(5488,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (5488,NaN).', async () => {
      var result = await SUT_example_math_ts.add3(5488,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (5488,-9333).', async () => {
      var result = await SUT_example_math_ts.add3(5488,-9333)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (5488,-3203).', async () => {
      var result = await SUT_example_math_ts.add3(5488,-3203)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (5488,-9471).', async () => {
      var result = await SUT_example_math_ts.add3(5488,-9471)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1346,0).', async () => {
      var result = await SUT_example_math_ts.add3(1346,0)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1346,-1).', async () => {
      var result = await SUT_example_math_ts.add3(1346,-1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1346,1).', async () => {
      var result = await SUT_example_math_ts.add3(1346,1)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1346,NaN).', async () => {
      var result = await SUT_example_math_ts.add3(1346,NaN)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1346,-9333).', async () => {
      var result = await SUT_example_math_ts.add3(1346,-9333)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1346,-3203).', async () => {
      var result = await SUT_example_math_ts.add3(1346,-3203)
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (1346,-9471).', async () => {
      var result = await SUT_example_math_ts.add3(1346,-9471)
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

    it('Will match a known snapshot ("a,b,c,d","fish").', async () => {
      var result = await SUT_example_words_ts.add('a,b,c,d','fish')
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

    it('Will match a known snapshot ("hello world","fish").', async () => {
      var result = await SUT_example_words_ts.add('hello world','fish')
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

    it('Will match a known snapshot ("fish","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add('fish','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","hello world").', async () => {
      var result = await SUT_example_words_ts.add('fish','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","fish").', async () => {
      var result = await SUT_example_words_ts.add('fish','fish')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add('fish','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add('fish','tHiS iS sOmE cRaZy fOrMaT')
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

    it('Will match a known snapshot ("Matthew Carter","fish").', async () => {
      var result = await SUT_example_words_ts.add('Matthew Carter','fish')
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

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","fish").', async () => {
      var result = await SUT_example_words_ts.add('tHiS iS sOmE cRaZy fOrMaT','fish')
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

    it('Will match a known snapshot ("a,b,c,d","fish").', async () => {
      var result = await SUT_example_words_ts.add2('a,b,c,d','fish')
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

    it('Will match a known snapshot ("hello world","fish").', async () => {
      var result = await SUT_example_words_ts.add2('hello world','fish')
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

    it('Will match a known snapshot ("fish","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add2('fish','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","hello world").', async () => {
      var result = await SUT_example_words_ts.add2('fish','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","fish").', async () => {
      var result = await SUT_example_words_ts.add2('fish','fish')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add2('fish','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add2('fish','tHiS iS sOmE cRaZy fOrMaT')
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

    it('Will match a known snapshot ("Matthew Carter","fish").', async () => {
      var result = await SUT_example_words_ts.add2('Matthew Carter','fish')
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

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","fish").', async () => {
      var result = await SUT_example_words_ts.add2('tHiS iS sOmE cRaZy fOrMaT','fish')
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

    it('Will match a known snapshot ("a,b,c,d","fish").', async () => {
      var result = await SUT_example_words_ts.add3('a,b,c,d','fish')
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

    it('Will match a known snapshot ("hello world","fish").', async () => {
      var result = await SUT_example_words_ts.add3('hello world','fish')
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

    it('Will match a known snapshot ("fish","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add3('fish','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","hello world").', async () => {
      var result = await SUT_example_words_ts.add3('fish','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","fish").', async () => {
      var result = await SUT_example_words_ts.add3('fish','fish')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add3('fish','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add3('fish','tHiS iS sOmE cRaZy fOrMaT')
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

    it('Will match a known snapshot ("Matthew Carter","fish").', async () => {
      var result = await SUT_example_words_ts.add3('Matthew Carter','fish')
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

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","fish").', async () => {
      var result = await SUT_example_words_ts.add3('tHiS iS sOmE cRaZy fOrMaT','fish')
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

    it('Will match a known snapshot (0,"fish").', async () => {
      var result = await SUT_example_words_ts.add4(0,'fish')
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

    it('Will match a known snapshot (-1,"fish").', async () => {
      var result = await SUT_example_words_ts.add4(-1,'fish')
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

    it('Will match a known snapshot (1,"fish").', async () => {
      var result = await SUT_example_words_ts.add4(1,'fish')
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

    it('Will match a known snapshot (NaN,"fish").', async () => {
      var result = await SUT_example_words_ts.add4(NaN,'fish')
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

    it('Will match a known snapshot (-4667,"a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add4(-4667,'a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-4667,"hello world").', async () => {
      var result = await SUT_example_words_ts.add4(-4667,'hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-4667,"fish").', async () => {
      var result = await SUT_example_words_ts.add4(-4667,'fish')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-4667,"Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add4(-4667,'Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-4667,"tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add4(-4667,'tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-6177,"a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add4(-6177,'a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-6177,"hello world").', async () => {
      var result = await SUT_example_words_ts.add4(-6177,'hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-6177,"fish").', async () => {
      var result = await SUT_example_words_ts.add4(-6177,'fish')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-6177,"Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add4(-6177,'Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (-6177,"tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add4(-6177,'tHiS iS sOmE cRaZy fOrMaT')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (4902,"a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.add4(4902,'a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (4902,"hello world").', async () => {
      var result = await SUT_example_words_ts.add4(4902,'hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (4902,"fish").', async () => {
      var result = await SUT_example_words_ts.add4(4902,'fish')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (4902,"Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.add4(4902,'Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot (4902,"tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.add4(4902,'tHiS iS sOmE cRaZy fOrMaT')
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

    it('Will match a known snapshot ("a,b,c,d","fish").', async () => {
      var result = await SUT_example_words_ts.adder('a,b,c,d','fish')
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

    it('Will match a known snapshot ("hello world","fish").', async () => {
      var result = await SUT_example_words_ts.adder('hello world','fish')
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

    it('Will match a known snapshot ("fish","a,b,c,d").', async () => {
      var result = await SUT_example_words_ts.adder('fish','a,b,c,d')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","hello world").', async () => {
      var result = await SUT_example_words_ts.adder('fish','hello world')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","fish").', async () => {
      var result = await SUT_example_words_ts.adder('fish','fish')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","Matthew Carter").', async () => {
      var result = await SUT_example_words_ts.adder('fish','Matthew Carter')
      expect(result).toMatchSnapshot()
    })

    it('Will match a known snapshot ("fish","tHiS iS sOmE cRaZy fOrMaT").', async () => {
      var result = await SUT_example_words_ts.adder('fish','tHiS iS sOmE cRaZy fOrMaT')
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

    it('Will match a known snapshot ("Matthew Carter","fish").', async () => {
      var result = await SUT_example_words_ts.adder('Matthew Carter','fish')
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

    it('Will match a known snapshot ("tHiS iS sOmE cRaZy fOrMaT","fish").', async () => {
      var result = await SUT_example_words_ts.adder('tHiS iS sOmE cRaZy fOrMaT','fish')
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

