// https://docs.google.com/document/d/1oiRyhfvuhNn0eI5zoYc2YnITn2_8QhjDE7p0Bm502Ik/edit

function loadGrain(levels) {
  if (levels.length < 3) return 0

  const minOfTwoNum = (a, b) => a <= b ? a : b
  const maxOfTwoNum = (a, b) => a >= b ? a : b

  return levels.reduce((acc, lev, i, levs) => {
    if (levs[i - 1] === undefined || levs[i + 1] === undefined) return acc

    const currentMax = maxOfTwoNum(levs[i - 1], acc.max)
    const currentMaxIndex = levs[i - 1] > acc.max ? i : acc.maxIndex

    if (levs[i - 1] > lev && lev <= levs[i + 1] && levs[i - 1] < currentMax) {
      // console.log(acc)
      return {
        amount: acc.amount + (minOfTwoNum(currentMax, levs[i + 1]) - lev) * (i + 1 - currentMaxIndex) - (levs[i - 1] - lev),
        max: currentMax,
        maxIndex: currentMaxIndex
      }
    }
    if (levs[i - 1] > lev && lev <= levs[i + 1]) {
      // console.log(acc)
      return {
        amount: acc.amount + (minOfTwoNum(currentMax, levs[i + 1]) - lev) * (i + 1 - currentMaxIndex),
        max: currentMax,
        maxIndex: currentMaxIndex
      }
    }
    if (levs[i - 1] <= lev && lev < levs[i + 1]) {
      // console.log(acc)
      return {
        amount: acc.amount + (minOfTwoNum(currentMax, levs[i + 1]) - lev) * (i + 1 - currentMaxIndex),
        max: currentMax,
        maxIndex: currentMaxIndex
      }
    }
    if (levs[i - 1] <= lev && lev < levs[i + 1]) {

    }

    else {
      // console.log(acc)
      return {
        amount: acc.amount,
        max: currentMax,
        maxIndex: currentMaxIndex
      }
    }
  }, {amount: 0, max: 0, maxIndex: 0}).amount
}


// console.log(loadGrain([0,27,15,11,43,39,1,40,44,33,48,12,22,19])) // 98
console.log(loadGrain([49,44,18,13,46,28,47,28,5,48,40,6,1,44,38,28,18,20,20,15])) // 242
// console.log(loadGrain([4, 1, 3])) // 2
// console.log(loadGrain([2, 1, 5, 2, 7, 4, 10])) // 7
// console.log(loadGrain([2, 0, 1, 5, 2, 7])) // 6
// console.log(loadGrain([2, 4, 2])) // 0
// console.log(loadGrain([7, 4])) // 0
// console.log(loadGrain([])) // 0
//
// console.log(loadGrain([2, 0, 1, 1, 1, 1, 3, 1, 1, 3]))
