## [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) ES5
OOP (Object-Oriented Programming) is an approach in programming in which data is encapsulated within objects and the object itself is operated on, rather than its component parts.

### Factory pattern
```javascript
function createPerson(name, age, job) {
  const obj = {}
  obj.name = name
  obj.age = age
  obj.job = job
  obj.getName = function() {return this.name}
  return obj
}
const personOne = createPerson('Serhii', 29, 'Developer')
const personTwo = createPerson('Olena', 27, 'Designer')
```

### Constructor pattern
```javascript
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.getName = function() {return this.name}
}
const personOne = new Person('Serhii', 29, 'Developer')
const personTwo = new Person('Olena', 27, 'Designer')
console.log(personOne.constructor === Person) // -> true
console.log(personOne instanceof Person) // -> true
console.log(Person.prototype.constructor === Person) // -> true
console.log(personOne.__proto__ === Person.prototype) // -> true

Person('John', 35, 'Doctor')
console.log(window.getName) // -> John

const obj = {}
Person.call(obj, 'Kelly', 25, 'Cook')
console.log(obj.getName()) // -> Kelly
```

### Prototype pattern
```javascript
function Person() {}
Person.prototype.name = 'Serhii'
Person.prototype.age = 29
Person.prototype.job = 'Developer'
Person.prototype.getName = function() {return this.name}
// Or.
Person.prototype = {
  name: 'Serhii',
  age: 29,
  job: 'Developer',
  getName: function() {return this.name}
}
Object.defineProperty (Person.prototype, "constructor", {
  enumerable: false,
  value: Person
})

Person.prototype.age = 29
Person.prototype.job = 'Developer'
Person.prototype.getName = function() {return this.name}

const personOne = new Person
const personTwo = new Person

console.log(personOne.getName()) // -> Serhii
console.log(personTwo.getName()) // -> Serhii
console.log(personOne.getName() === personTwo.getName()) // -> true
console.log(Person.prototype.isPrototypeOf(personOne)) // -> true
console.log(Object.getPrototypeOf(personOne) === Person.prototype) // -> true
console.log(Object.getPrototypeOf(personOne).name) // -> Serhii
```

### Prototype + Constructor  (best practice)
```javascript
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.friends = ['Oleh', 'Boris', 'Olha']
}
Person.prototype = {
  constructor: Person,
  getName: function() {return this.name}
}

const personOne = new Person('Serhii', 29, 'Developer')
const personTwo = new Person('Olena', 27, 'Designer')
personTwo.friends.push('Svetlana')

console.log(personOne.friends) // -> [ 'Oleh', 'Boris', 'Olha' ]
console.log(personTwo.friends) // -> [ 'Oleh', 'Boris', 'Olha', 'Svetlana' ]
```

### Parasitic constructor pattern
Instanceof operator doesn't work with this pattern
```javascript
function createPerson(name, age, job) {
  const obj = {}
  obj.name = name
  obj.age = age
  obj.job = job
  obj.getName = function() {return this.name}
  return obj
}
const personOne = new Person('Serhii', 29, 'Developer')
```

### Inheritance — Prototype chains
```javascript
function SuperType() {this.prop = true}
SuperType.prototype.getSuperProp = function() {return this.prop}
function SubType() {this.subprop = false}

SubType.prototype = new SuperType() // Inherit from SuperType
SubType.prototype.getSubProp = function() {return this.subprop} // New method

const instance = new SubType()

console.log(instance.getSuperProp()) // -> true
console.log(instance.getSubProp()) // -> false
console.log(instance.constructor) // -> [Function: SuperType]
```

### Inheritance — Constructor stealing
```javascript
function SuperType(color) {
  this.color = color
  this.numbers = [1, 2, 3]
}
function SubType() {
  SuperType.call(this, 'red')  // Inherit from SuperType
}
const instanceOne = new SubType()
instanceOne.numbers.push(4, 5)
const instanceTwo = new SubType()

console.log(instanceOne.color) // -> red
console.log(instanceOne.numbers) // -> [ 1, 2, 3, 4, 5 ]
console.log(instanceTwo.numbers) // -> [ 1, 2, 3 ]
```

### Combination inheritance (best practice)
```javascript
function SuperType(color) {
  this.color = color
  this.numbers = [1, 2, 3]
}
SuperType.prototype.getColor = function() {return this.color}
SuperType.prototype.getNumbers = function() {return this.numbers}

function SubType(color, width) {
  SuperType.call(this, color)  // Inherit from SuperType
  this.width = width
}

SubType.prototype = new SuperType() // Method inheritance
SubType.prototype.getWidth = function() {return this.width}

const instanceOne = new SubType('red', 120)
instanceOne.numbers.push(4, 5)
console.log(instanceOne.getColor()) // -> red
console.log(instanceOne.getNumbers()) // -> [ 1, 2, 3, 4, 5 ]
console.log(instanceOne.getWidth()) // -> 120

const instanceTwo = new SubType('black', 220)
console.log(instanceTwo.getColor()) // -> black
console.log(instanceTwo.getNumbers()) // -> [ 1, 2, 3 ]
console.log(instanceTwo.getWidth()) // -> 220
```

### Prototypal inheritance 
Object.create() method equivalent
```javascript
function generalObject(obj) {
  function Foo() {}
  Foo.prototype = obj
  return new Foo
}

const personOne = {
  name: 'Serhii',
  friends: ['Oleh', 'Boris', 'Olha']
}

const personTwo = generalObject(personOne)
personTwo.name = 'Dionis'
personTwo.friends.push('Freya')

console.log(personOne) // -> { name: 'Serhii', friends: [ 'Oleh', 'Boris', 'Olha', 'Freya' ] }
```

### Parasitic combined inheritance (best practice)
```javascript
function generalObject(obj) {
  function Foo() {}
  Foo.prototype = obj
  return new Foo
}

function inheritPrototype(subType, superType) {
  const proto = generalObject(superType.prototype) // Create an object
  proto.constructor = subType // Extension of the object
  subType.prototype = proto // Purpose of the object
}

function SuperType(name) {
  this.name = name
  this.friends = ['Oleh', 'Boris', 'Olha']
}
SuperType.prototype.getName = function() {return this.name}

function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}
inheritPrototype(SubType, SuperType)
SubType.prototype.getAge = function() {return this.age}

const personOne = new SubType('Serhii', 29)
const personTwo = new SubType('Olena', 27)
personTwo.friends.push('Svetlana')

console.log(personOne.getName(), personOne.getAge(), personOne.friends)
// -> Serhii 29 [ 'Oleh', 'Boris', 'Olha' ]
console.log(personTwo.getName(), personTwo.getAge(), personTwo.friends)
// -> Olena 27 [ 'Oleh', 'Boris', 'Olha', 'Svetlana' ]
```

---
[Home](../README.md) > [JavaScript](javascript.md)