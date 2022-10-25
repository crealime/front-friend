function Person() {}
Person.prototype.name = 'Serhii'
Person.prototype.age = 29
Person.prototype.job = 'Developer'
Person.prototype.sayName = function() {return this.name}

const personOne = new Person
const personTwo = new Person

console.log(personOne.sayName()) // -> Serhii
console.log(personTwo.sayName()) // -> Serhii
console.log(personOne.sayName() === personTwo.sayName()) // -> true

console.log(Person.prototype.constructor === Person) // -> true