// Calculates all possible combos of some multi-dimensional array, as if
// the Y-axis was the combo to compare against.

// See bottom for samples
export const powerSet = (args: any[][]): any[][] => {
  const pSets: any[] = []

  const powerInner = (pset: any[], sy: number, sx: number) => {
    for (let iy = sy + 1; iy < args.length; iy++) {
      for (let ix = 0; ix < args[iy].length; ix++) {
        let myPset = pset.slice()
        let t2 = args[iy][ix]
        myPset.push(t2)
        pSets.push(myPset)
        powerInner(myPset, iy, ix)
      }
    }
  }

  const powerSetGo = (sy: number, sx: number) => {
    for (let y = sy; y < args.length; y++) {
      for (let x = sx; x < args[y].length; x++) {
        // Here, we are at 0,0 (or 1) - now we must iterate across all next columns
        let t1 = args[y][x]
        let pset = [t1]
        powerInner(pset, y, x)
      }
    }
  }

  powerSetGo(0, 0)

  const filtered = pSets.filter((s) => s.length === args.length)

  return filtered
}

// Sample output from this

// const args = [
//   [1, 2, 3],
//   [4, 5],
//   [6, 7],
//   [8, 9, 10],
// ]


// [ [ 1, 4, 6, 8 ],
//   [ 1, 4, 6, 9 ],
//   [ 1, 4, 6, 10 ],
//   [ 1, 4, 7, 8 ],
//   [ 1, 4, 7, 9 ],
//   [ 1, 4, 7, 10 ],
//   [ 1, 5, 6, 8 ],
//   [ 1, 5, 6, 9 ],
//   [ 1, 5, 6, 10 ],
//   [ 1, 5, 7, 8 ],
//   [ 1, 5, 7, 9 ],
//   [ 1, 5, 7, 10 ],
//   [ 2, 4, 6, 8 ],
//   [ 2, 4, 6, 9 ],
//   [ 2, 4, 6, 10 ],
//   [ 2, 4, 7, 8 ],
//   [ 2, 4, 7, 9 ],
//   [ 2, 4, 7, 10 ],
//   [ 2, 5, 6, 8 ],
//   [ 2, 5, 6, 9 ],
//   [ 2, 5, 6, 10 ],
//   [ 2, 5, 7, 8 ],
//   [ 2, 5, 7, 9 ],
//   [ 2, 5, 7, 10 ],
//   [ 3, 4, 6, 8 ],
//   [ 3, 4, 6, 9 ],
//   [ 3, 4, 6, 10 ],
//   [ 3, 4, 7, 8 ],
//   [ 3, 4, 7, 9 ],
//   [ 3, 4, 7, 10 ],
//   [ 3, 5, 6, 8 ],
//   [ 3, 5, 6, 9 ],
//   [ 3, 5, 6, 10 ],
//   [ 3, 5, 7, 8 ],
//   [ 3, 5, 7, 9 ],
//   [ 3, 5, 7, 10 ] ]
