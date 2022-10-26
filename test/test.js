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