## Import / Export

### CommonJS
```javascript
// users.js
const usersList = [
  {name: 'Solomon', age: 37, gender: 'male'},
  {name: 'Soloha', age: 27, gender: 'female'}
]

function addYearToAge(list) {
  list.map(user => user.age =+ 1)
}

module.exports = {usersList, addYearToAge}

// app.js
const {usersList, addYearToAge} = require('./users.js')

addYearToAge(usersList)
usersList.forEach(user => {
  console.log(user.name, user.age)
})
// => Solomon 38
// => Soloha 28
```

### ES modules
```javascript
// users.mjs
export const usersList = [
  {name: 'Solomon', age: 37, gender: 'male'},
  {name: 'Soloha', age: 27, gender: 'female'}
]

export function addYearToAge(list) {
  list.map(user => user.age += 1)
}

// app.mjs
import {usersList, addYearToAge} from './users.mjs'

addYearToAge(usersList)
usersList.forEach(user => {
  console.log(user.name, user.age)
})

// Or
import * as user from './users.mjs'

user.addYearToAge(user.usersList)
user.usersList.forEach(user => {
  console.log(user.name, user.age)
})

// Or
// users.mjs
export default class User {
  constructor() {
    this.usersList = [
      {name: 'Solomon', age: 37, gender: 'male'},
      {name: 'Soloha', age: 27, gender: 'female'}
    ]
  }

  addYearToAge() {
    return this.usersList.map(user => user.age += 1)
  }
}

export function logTime() {
  console.log(new Date().getTime())
}

// app.mjs
import Users, {logTime} from './users.mjs'

const users = new Users()

users.addYearToAge(users.usersList)

users.usersList.forEach(user => {
  console.log(user.name, user.age)
})

logTime()

// => Solomon 38
// => Soloha 28
// => 1667908905205

```



---
[Home](../README.md) > [Node.js](node.md)