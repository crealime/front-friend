## [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Array initialization

```javascript
const arr = new Array(1, 2, '3', 'four', ['some', 'too'], {a: 752, b: true}, false)
```

### Array methods

[push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) — adds items to the end.
```javascript
const arr = ['pigs', 'goats', 'sheep']
const count = arr.push('cows')
console.log(count) // => 4
console.log(arr) // => ["pigs", "goats", "sheep", "cows"]
arr.push('chickens', 'cats', 'dogs')
console.log(arr) // => ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

[pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) — pop an element from the end.
```javascript
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
console.log(plants.pop()) // => "tomato"
console.log(plants) // => ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop()
console.log(plants) // => ["broccoli", "cauliflower", "cabbage"]
```

[shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) — extracts the element from the beginning.
```javascript
const arr = [1, 2, 3]
const firstElement = arr.shift()
console.log(arr) // => [2, 3]
console.log(firstElement) // => 1
``` 

[unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) — add items to the beginning.
```javascript
const arr = [1, 2, 3]
console.log(arr.unshift(4, 5)) // => 5
console.log(arr) // => [4, 5, 1, 2, 3]
```

[splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) — change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
```javascript
const months = ['Jan', 'March', 'April', 'June']
months.splice(1, 0, 'Feb') // inserts at index 1
console.log(months) // => ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May') // replaces 1 element at index 4
console.log(months) // => ["Jan", "Feb", "March", "April", "May"]
```

[slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) — return a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
```javascript
const arr = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(arr.slice(2)) // => ["camel", "duck", "elephant"]
console.log(arr.slice(2, 4)) // => ["camel", "duck"]
console.log(arr.slice(1, 5)) // => ["bison", "camel", "duck", "elephant"]
console.log(arr.slice(-2)) // => ["duck", "elephant"]
console.log(arr.slice(2, -1)) // => ["camel", "duck"]
console.log(arr.slice()) // => ["ant", "bison", "camel", "duck", "elephant"]
```

[forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) — executes a provided function once for each array element.
```javascript
const arr = ['a', 'b', 'c']
arr.forEach(element => console.log(element))
// => a
// => b
// => c
```

[indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) — return the first index at which a given element can be found in the array, or -1 if it is not present.
```javascript
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
console.log(beasts.indexOf('bison')) // => 1
// start from index 2
console.log(beasts.indexOf('bison', 2)) // => 4
console.log(beasts.indexOf('giraffe')) // => -1
```

[lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) — return the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
```javascript
const arr = ['Dodo', 'Tiger', 'Penguin', 'Dodo']
console.log(arr.lastIndexOf('Dodo')) // => 3
console.log(arr.lastIndexOf('Tiger')) // => 1
```

[includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) — determine whether an array includes a certain value among its entries, returning true or false as appropriate.
```javascript
const arr = [1, 2, 3]
console.log(arr.includes(2)) // => true
const pets = ['cat', 'dog', 'bat']
console.log(pets.includes('cat')) // => true
console.log(pets.includes('at')) // => false
```

[find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) — return the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
```javascript
const arr = [5, 12, 8, 130, 44]
const found = arr.find(element => element > 10)
console.log(found) // => 12
```

[findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) — return the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
```javascript
const arr = [5, 12, 8, 130, 44]
const isLargeNumber = (element) => element > 13
console.log(arr.findIndex(isLargeNumber)) // => 3
```

[filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) — create a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
const result = words.filter(word => word.length > 6)
console.log(result) // => ["exuberant", "destruction", "present"]
```

[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) — create a new array populated with the results of calling a provided function on every element in the calling array.
```javascript
const arr = [1, 4, 9, 16]
// pass a function to map
const map1 = arr.map(x => x * 2)
console.log(map1) // => [2, 8, 18, 32]
```

[sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) — sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
```javascript
const months = ['March', 'Jan', 'Feb', 'Dec']
months.sort()
console.log(months) // => ["Dec", "Feb", "Jan", "March"]
const arr = [1, 30, 4, 21, 100000]
arr.sort()
console.log(arr) // => [1, 100000, 21, 30, 4]

// Syntax
// Functionless
arr.sort()
// Arrow function (number sort)
arr.sort((a, b) => { return a - b } )
// Compare function
arr.sort(compareFn)
function compareFn(a, b) {
  if ('a is less than b by some ordering criterion') {
    return -1
  }
  if ('a is greater than b by the ordering criterion') {
    return 1
  }
  // a must be equal to b
  return 0
}
```

[reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) — reverse an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
```javascript
const arr = ['one', 'two', 'three']
console.log('arr:', arr) // => arr: ["one", "two", "three"]
const reversed = arr.reverse()
console.log('reversed:', reversed)
// expected output: "reversed:" Array ["three", "two", "one"]
// Careful: reverse is destructive -- it changes the original array.
console.log('arr:', arr) // => arr: ["three", "two", "one"]
```

[join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) — create and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
```javascript
const elements = ['Fire', 'Air', 'Water']
console.log(elements.join()) // => Fire, Air, Water
console.log(elements.join('')) // => FireAirWater
console.log(elements.join('-')) // => Fire-Air-Water
```

[reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) — executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
```javascript
const arr = [1, 2, 3, 4]
// 0 + 1 + 2 + 3 + 4
const initialValue = 0
const sumWithInitial = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
)
console.log(sumWithInitial) // => expected output: 10
```

[reduceRight](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) — apply a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
```javascript
const arr = [[0, 1], [2, 3], [4, 5]]
const result = arr.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue))
console.log(result) // => [4, 5, 2, 3, 0, 1]
```

[isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) — determine whether the passed value is an Array.
```javascript
console.log(Array.isArray([1, 2, 3])) // => true
```
---
[Home](/README.md) > [JavaScript](javascript.md)
