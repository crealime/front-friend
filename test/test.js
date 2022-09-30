// https://docs.google.com/document/d/1oiRyhfvuhNn0eI5zoYc2YnITn2_8QhjDE7p0Bm502Ik/edit

function loadGrain(levels) {
  if (levels.length < 3) return 0

  const minOfTwoNum = (a, b) => a <= b ? a : b
  const maxOfTwoNum = (a, b) => a >= b ? a : b

  return levels.reduce((acc, lev, i, levs) => {
    if (levs[i - 1] === undefined || levs[i + 1] === undefined) return acc

    const currentMax = maxOfTwoNum(levs[i - 1], acc.max)
    const currentMaxIndex = levs[i - 1] > acc.max ? i : acc.maxIndex
    let currentAmount = acc.maxAmount
    if (levs[i - 1] > acc.max) {
      currentAmount = 0
    }

    if (levs[i - 1] > lev && lev <= levs[i + 1] && levs[i + 1] < acc.middle && levs[i + 1] < levs[i - 1]) {
      // console.log(-1, acc.amount)
      return {
        amount: acc.amount + levs[i + 1] - lev,
        max: currentMax,
        maxIndex: currentMaxIndex,
        maxAmount: (minOfTwoNum(currentMax, levs[i + 1])) * (i + 1 - currentMaxIndex),
        middle: acc.middle,
        middleIndex: i + 1,
        middleAmount: 0
      }
    }
    if (levs[i - 1] > lev && lev <= levs[i + 1] && levs[i + 1] < acc.middle) {
      // console.log(0, acc.amount)
      return {
        amount: acc.amount + levs[i + 1] * (i - acc.middleIndex) - (acc.middleAmount + lev),
        max: currentMax,
        maxIndex: currentMaxIndex,
        maxAmount: (minOfTwoNum(currentMax, levs[i + 1])) * (i + 1 - currentMaxIndex),
        middle: acc.middle,
        middleIndex: i + 1,
        middleAmount: 0
      }
    }
    if (levs[i - 1] > lev && lev <= levs[i + 1] && levs[i - 1] < currentMax) {
      // console.log(1, acc.amount)
      return {
        amount: acc.amount + (minOfTwoNum(currentMax, levs[i + 1]) * (i + 1 - currentMaxIndex)) - (currentAmount + lev),
        max: currentMax,
        maxIndex: currentMaxIndex,
        maxAmount: (minOfTwoNum(currentMax, levs[i + 1])) * (i + 1 - currentMaxIndex),
        middle: acc.middle,
        middleIndex: acc.middleIndex,
        middleAmount: acc.middleAmount
      }
    }
    if (levs[i - 1] > lev && lev <= levs[i + 1]) {
      // console.log(2, acc.amount)
      return {
        amount: acc.amount + (minOfTwoNum(currentMax, levs[i + 1]) * (i + 1 - currentMaxIndex)) - (currentAmount + lev),
        max: currentMax,
        maxIndex: currentMaxIndex,
        maxAmount: currentAmount,
        middle: acc.middle,
        middleIndex: acc.middleIndex,
        middleAmount: 0
      }
    }
    if (levs[i - 1] <= lev && lev < levs[i + 1]) {
      // console.log(3, acc.amount)
      return {
        amount: acc.amount + (minOfTwoNum(currentMax, levs[i + 1]) - lev) * (i + 1 - currentMaxIndex),
        max: currentMax,
        maxIndex: currentMaxIndex,
        maxAmount: currentAmount,
        middle: acc.middle,
        middleIndex: acc.middleIndex,
        middleAmount: acc.middleAmount
      }
    }
    if (levs[i - 1] > lev && lev > levs[i + 1]) {
      // console.log(4, acc.amount)
      return {
        amount: acc.amount,
        max: currentMax,
        maxIndex: currentMaxIndex,
        maxAmount: currentAmount + lev,
        middle: acc.middle,
        middleIndex: acc.middleIndex,
        middleAmount: acc.middleAmount + lev
      }
    }
    if (levs[i - 1] < lev && lev > levs[i + 1] && lev < currentMax) {
      // console.log(5, acc.amount)
      return {
        amount: acc.amount,
        max: currentMax,
        maxIndex: currentMaxIndex,
        maxAmount: currentAmount + lev,
        middle: lev,
        middleIndex: i,
        middleAmount: 0
      }
    }
    else {
      // console.log(6, acc.amount)
      return {
        amount: acc.amount,
        max: currentMax,
        maxIndex: currentMaxIndex,
        maxAmount: currentAmount,
        middle: acc.middle,
        middleIndex: acc.middleIndex,
        middleAmount: 0
      }
    }
  }, {amount: 0, max: 0, maxIndex: 0, maxAmount: 0, middle: 0, middleIndex: 0, middleAmount: 0}).amount
}


console.log(loadGrain([0,27,15,11,43,39,1,40,44,33,48,12,22,19])) // 98
console.log(loadGrain([49,44,18,13,46,28,47,28,5,48,40,6,1,44,38,28,18,20,20,15])) // 242
console.log(loadGrain([4, 1, 3])) // 2
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10])) // 7
console.log(loadGrain([2, 0, 1, 5, 2, 7])) // 6
console.log(loadGrain([2, 4, 2])) // 0
console.log(loadGrain([7, 4])) // 0
console.log(loadGrain([])) // 0
//
// console.log(loadGrain([2, 0, 1, 1, 1, 1, 3, 1, 1, 3]))
