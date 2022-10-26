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