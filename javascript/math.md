## [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

Math is a built-in object that has properties and methods for mathematical constants and functions. It's not a function object.

[ceil](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) — rounds up and returns the smaller integer greater than or equal to a given number.
```javascript
console.log(Math.ceil(.9)) // -> 1
console.log(Math.ceil(7.001)) // -> 8
```

[floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) — rounds down and returns the largest integer less than or equal to a given number.
```javascript
console.log(Math.floor(5.95)) // -> 5
console.log(Math.floor(5.05)) // -> 5
```

[round](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) — returns the value of a number rounded to the nearest integer.
```javascript
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05)) // -> 6 6 5
```

[trunc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) — returns the integer part of a number by removing any fractional digits.
```javascript
console.log(Math.trunc(12.24)) // -> 12
console.log(Math.trunc(0.123)) // -> 0
console.log(Math.trunc(-0.123)) // -> -0
```

[abs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) — returns the absolute value of a number.
```javascript
console.log(Math.abs(5 - 3)) // -> 2
console.log(Math.abs(3 - 5)) // -> 2
```

[sign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign) — returns 1 or -1, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.
```javascript
console.log(Math.sign(3)) // -> 1
console.log(Math.sign(-3)) // -> -1
console.log(Math.sign(0)) // -> 0
console.log(Math.sign('-3')) // -> -1
```

[min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min) — returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
```javascript
console.log(Math.min(2, 3, 1)) // -> 1
console.log(Math.min(-2, -3, -1)) // -> -3
console.log(Math.min(...[2, 3, 1])) // -> 1
```

[max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max) — returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
```javascript
console.log(Math.min(2, 3, 1)) // -> 3
console.log(Math.min(-2, -3, -1)) // -> -1
console.log(Math.min(...[2, 3, 1])) // -> 3
```

[pow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) — returns the value of a base raised to a power.
```javascript
console.log(Math.pow(7, 3)) // -> 343
console.log(Math.pow(4, 0.5)) // -> 2
console.log(Math.pow(7, -2)) // -> 0.02040816326530612
console.log(Math.pow(-7, 0.5)) // -> NaN
```

[random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) — returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
```javascript
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
console.log(getRandomInt(5)) // -> 0, 1, 2, 3, 4
console.log(Math.random()) // -> a number from 0 to <1
```

[sqrt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) — function returns the square root of a number.
```javascript
function calcHypotenuse(a, b) {
  return (Math.sqrt((a * a) + (b * b)))
}
console.log(calcHypotenuse(3, 4)) // -> 5
console.log(calcHypotenuse(5, 12)) // -> 13
```

---
[Home](/README.md) > [JavaScript](javascript.md)