## [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

### Object initialization

```javascript
const obj = {a: 1, b: [1, 2, 3], c() {return this.a}, 'some prop': 'some string'}
```

### Set, get and delete properties

```javascript
obj.d = 17
console.log(obj.d) // -> 17
console.log(obj['some prop']) // -> some string
delete obj.d
console.log(obj.d) // -> undefined
```
### Computed properties

```javascript
const fruit = prompt("Which fruit to buy?", "apple")
const bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
console.log( bag.apple ) // -> 5
```

### «in» operator
Checking if a property exists

```javascript
const user = { name: "John"}
console.log( "age" in user ) // -> true
```

### For-in loop
[for-in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

```javascript
for (const i in obj) {
  console.log(obj[i])
}
```

### Object properties (methods)

[assign]() — copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
```javascript
const target = { a: 1, b: 2 }
const source1 = { b: 3, c: 4 }
const source2 = { e: 5, f: 6 }
const returnedTarget = Object.assign(target, source1, source2)
console.log(target) // -> { a: 1, b: 3, c: 4, e: 5, f: 6 }
console.log(returnedTarget === target) // -> true
```

[create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) — creates a new object, using an existing object as the prototype of the newly created object.
```javascript
const person = {
  isHuman: false,
  gender: 'female',
  printIntroduction: function() {
    console.log(`My name is ${this.name}. My gender is ${this.gender}. Am I human? ${this.isHuman}`)
  }
}
const me = Object.create(person)
me.name = 'John' // "name" is a property set on "me", but not on "person"
me.isHuman = true // inherited properties can be overwritten
me.printIntroduction() // -> My name is John. My gender is female. Am I human? true
person.gender = 'male' // properties are dependent
me.printIntroduction() // -> My name is John. My gender is male. Am I human? true
```

[getPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) — returns the prototype (i.e. the value of the internal `Prototype` property) of the specified object.
```javascript
const proto = {}
const obj = Object.create(proto)
console.log(Object.getPrototypeOf(obj) === proto) // -> true
```

[entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) — returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is the same as iterating with a `for...in` loop, except that a `for...in` loop enumerates properties in the prototype chain as well.
```javascript
const obj = {a: 'somestring', b: 42}
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`) // -> a: somestring => b: 42
}
```

[keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) — returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
```javascript
const obj = {a: 'somestring', b: 42, c: false}
console.log(Object.keys(obj)) // -> ["a", "b", "c"]
```

[values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values) — returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)
```javascript
const obj = {a: 'somestring', b: 42, c: false}
console.log(Object.values(obj)) // -> ["somestring", 42, false]
```

[getOwnPropertyNames](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) — returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.
```javascript
const obj = {a: 1, b: 2, c: 3};
console.log(Object.getOwnPropertyNames(obj)) // -> ["a", "b", "c"]
```

[hasOwn (hasOwnProperty)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) — returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.
```javascript
const obj = {prop: 'exists'}
console.log(Object.hasOwn(obj, 'prop')) // -> true
console.log(Object.hasOwn(obj, 'sum')) // -> false
```

[fromEntries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) — transforms a list of key-value pairs into an object.
```javascript
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
])
const obj = Object.fromEntries(entries)
console.log(obj) // -> { foo: "bar", baz: 42 }
```

[in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in) — returns true if the specified property is in the specified object or its prototype chain.
```javascript
const car = {make: 'Honda', model: 'Accord', year: 1998}
console.log('make' in car) // -> true
```

[freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) — freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.
```javascript
const obj = {
  prop: 42
}
Object.freeze(obj)
obj.prop = 33 // throws an error in strict mode
console.log(obj.prop) // -> 42
```

[isFrozen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen) — determines if an object is frozen.
```javascript
console.log(Object.isFrozen(obj)) // -> true
```

[seal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) — seals an object. Sealing an object prevents extensions and makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable. seal() returns the same object that was passed in.
```javascript
const obj = {prop: 42}
Object.seal(obj)
obj.prop = 33;
console.log(obj.prop) // -> 33
delete obj.prop // cannot delete when sealed
console.log(obj.prop) // -> 33
```

[isSealed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) — determines if an object is sealed.
```javascript
const obj = {prop: 42}
Object.seal(obj)
console.log(Object.isSealed(obj)) // true
```

[isPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) — checks if an object exists in another object's prototype chain.
```javascript
function Foo() {}
function Bar() {}
Bar.prototype = Object.create(Foo.prototype)
const bar = new Bar()
console.log(Foo.prototype.isPrototypeOf(bar)) // -> true
console.log(Bar.prototype.isPrototypeOf(bar)) // -> true
```

[defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) — defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
```javascript
const person = {login: ''}
Object.defineProperty(person, 'name', {
  configurable: false, // Forbidden to delete
  writable: false, // Forbidden to change
  enumerable: false, // Forbidden to enumerate in a loop
  value: 'Serhii' // Value of the property
})
console.log(person.name) // -> Serhii
person.name = 'Vladlen'
console.log(person.name) // -> Serhii

Object.defineProperty(person, 'nickname', {
  get: function() {
    return this.login
  },
  set: function(newValue) {
    this.login = newValue.toLowerCase()
  }
})
person.nickname = 'Deveb'
console.log(person.nickname) // -> deveb
```

[defineProperties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) — defines new or modifies existing properties directly on an object, returning the object.
```javascript
const obj = {}
Object.defineProperties(obj, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});
console.log(obj.property1) // -> 42
```

[get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) — binds an object property to a function that will be called when that property is looked up.
```javascript
const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    return this.log[this.log.length - 1]
  }
}
console.log(obj.latest) // -> c
```

[set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) — binds an object property to a function to be called when there is an attempt to set that property.
```javascript
const languages = {
  log: [],
  set current(name) {
    this.log.push(name)
  }
}
languages.current = 'EN'
languages.current = 'FA'
console.log(languages.log) // -> ['EN', 'FA']
```

---
[Home](../README.md) > [JavaScript](javascript.md)
