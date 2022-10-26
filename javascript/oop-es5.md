## [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming)

OOP (Object-Oriented Programming) is an approach in programming in which data is encapsulated within objects and the object itself is operated on, rather than its component parts.

### Factory pattern
```javascript
function createPerson(name, age, job) {
  const obj = {}
  obj.name = name
  obj.age = age
  obj.job = job
  obj.sayName = function() {return this.name}
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
  this.sayName = function() {return this.name}
}
const personOne = new Person('Serhii', 29, 'Developer')
const personTwo = new Person('Olena', 27, 'Designer')
console.log(personOne.constructor === Person) // -> true
console.log(personOne instanceof Person) // -> true

Person('John', 35, 'Doctor')
console.log(window.sayName) // -> John

const obj = {}
Person.call(obj, 'Kelly', 25, 'Cook')
console.log(obj.sayName()) // -> Kelly
```

### Prototype pattern
```javascript
function Person() {}
Person.prototype.name = 'Serhii'
Person.prototype.age = 29
Person.prototype.job = 'Developer'
Person.prototype.sayName = function() {return this.name}
// Or.
Person.prototype = {
  name: 'Serhii',
  age: 29,
  job: 'Developer',
  sayName: function() {return this.name}
}
Object.defineProperty (Person.prototype, "constructor", {
  enumerable: false,
  value: Person
})

Person.prototype.age = 29
Person.prototype.job = 'Developer'
Person.prototype.sayName = function() {return this.name}

const personOne = new Person
const personTwo = new Person

console.log(personOne.sayName()) // -> Serhii
console.log(personTwo.sayName()) // -> Serhii
console.log(personOne.sayName() === personTwo.sayName()) // -> true
console.log(Person.prototype.isPrototypeOf(personOne)) // -> true
console.log(Object.getPrototypeOf(personOne) === Person.prototype) // -> true
console.log(Object.getPrototypeOf(personOne).name) // -> Serhii
```

### Prototype + Constructor
```javascript
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.friends = ['Oleh', 'Boris', 'Olha']
}
Person.prototype = {
  constructor: Person,
  sayName: function() {return this.name}
}
const personOne = new Person('Serhii', 29, 'Developer')
```

### Parasitic constructor pattern
Instanceof operator doesn't work with this pattern
```javascript
function createPerson(name, age, job) {
  const obj = {}
  obj.name = name
  obj.age = age
  obj.job = job
  obj.sayName = function() {return this.name}
  return obj
}
const personOne = new Person('Serhii', 29, 'Developer')
```



---
[Home](/README.md) > [JavaScript](javascript.md)