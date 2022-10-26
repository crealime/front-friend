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
console.log(personTwo.getName(), personTwo.getAge(), personTwo.friends)
