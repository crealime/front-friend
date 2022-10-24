function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function() {
    return this.name
  }
}
const personOne = new Person('Serhii', 29, 'Developer')
const personTwo = new Person('Olena', 27, 'Designer')
console.log(personOne.constructor === Person) // -> true
console.log(personOne instanceof Person) // -> true