## [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### String initialization

```javascript
const str = 'Some text'
```

### String methods

[charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) — returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
```javascript
const str = 'Lorem Ipsum is simply dummy text of the printing.'
console.log(str.charAt(2)) // -> r
console.log(str[3]) // -> e
```

[startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) — method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
```javascript
const str = 'We are the best!'
console.log(str.startsWith('We')) // -> true
console.log(str.startsWith('are')) // -> false
console.log(str.startsWith('are', 3)) // -> true
```

[endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) — determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
```javascript
const str = 'We are the best!'
console.log(str.endsWith('best!')) // -> true
console.log(str.endsWith('best')) // -> false
console.log(str.endsWith('best', 17)) // -> true
```

[includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) —
```javascript
const str = 'Hello world!'
const word = 'world'
console.log(str.includes(word)) // -> true
```

[indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) — given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number.
```javascript
const str = 'Hello world!'
const word = 'world'
console.log(str.indexOf(word)) // -> 6
```

[lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf) — given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number.
```javascript
const str = 'Hello world, my world!'
const word = 'world'
console.log(str.lastIndexOf(word)) // -> 16
```

[match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) — retrieves the result of matching a string against a regular expression.
```javascript
const str = 'Hello world. My world!'
const regex = /[A-Z]/g
const found = str.match(regex)
console.log(found) // -> [ 'H', 'M' ]
```

[normalize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) — returns the Unicode Normalization Form of the string.
```javascript
const valueStr = ['h', 'ĥ', 'æ', 'ae', 'g', 'ġ']
const normArr = valueStr.map(function (text) {
  return text.normalize();
})

normArr.sort(function (f,s) {
  if (f < s) return -1
  else if (f === s) return 0
  else return 1
})

console.log(normArr) // -> [ 'ae', 'g', 'h', 'æ', 'ġ', 'ĥ' ]
```

[raw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw) — method is a tag function of template literals. This is similar to the r prefix in Python, or the @ prefix in C# for string literals. It's used to get the raw string form of template literals — that is, substitutions (e.g. ${foo}) are processed, but escape sequences (e.g. \n) are not.
```javascript
console.log(String.raw`Hello\n${2+3}!`)
```

[repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) — constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
```javascript
const str = 'Hello world! '
console.log(`${str.repeat(3)}`) // -> Hello world! Hello world! Hello world!
```

[replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) — returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.
```javascript
const str = 'Hello world!'
console.log(str.replace('world', 'Dolly')) // -> Hello Dolly!
const regex = /hello/i
console.log(str.replace(regex, 'Hi')) // -> Hi world!
```

[replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) — returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.
```javascript
const str = 'Hello world, my world!'
console.log(str.replaceAll('world', 'Kitty')) // -> Hello Kitty, my Kitty!
```

[search](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search) — executes a search for a match between a regular expression and this String object.
```javascript
const str = 'Hello world, my world!'
const regex = /[^\w\s]/g
console.log(str.search(regex)) // -> 11
console.log(str[str.search(regex)]) // -> ,
```

[slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) — extracts a section of a string and returns it as a new string, without modifying the original string.
```javascript
const str = 'The quick brown fox jumps over the lazy dog.'
console.log(str.slice(31)) // -> the lazy dog.
console.log(str.slice(4, 19)) // -> quick brown fox
console.log(str.slice(-4)) // -> dog.
console.log(str.slice(-9, -5)) // -> lazy
```

[split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) — method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
```javascript
const str = 'Hello my dear!'
console.log(str.split(' ')) // -> [ 'Hello', 'my', 'dear!' ]
```

[toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) — returns the calling string value converted to lower case.
```javascript
const str = 'Hello world!'
console.log(str.toLowerCase()) // -> hello world!
```

[toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) — returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
```javascript
const str = 'Hello world!'
console.log(str.toUpperCase()) // -> HELLO WORLD!
```

[trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) — removes whitespace from both ends of a string and returns a new string, without modifying the original string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
```javascript
const str = '     Hello world!     '
console.log(str.trim()) // -> Hello world!
```

---
[Home](/README.md) > [JavaScript](javascript.md)
