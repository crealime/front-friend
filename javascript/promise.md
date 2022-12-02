## [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

The Promise object is used for deferred and asynchronous evaluation.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(Math.random()), 1000) // When a promise is triggered
  // setTimeout(() => reject('Error!'), 1000) // Promise error
})

promise
  .then(x => { // Execution chains after promise response
    console.log(x)
    return x
  })
  .then(y => {
    console.log(y)
    return y
  })
  .catch(error => console.log(error)) // Falling into an error
  .finally(() => console.log('Finally')) // Execute anyway

Promise.all([
  // Pass promises or functions that return promises for general execution
]).then((data) => console.log(data)) // The results of all promises in the form of an array
```

---
[Home](../README.md) > [JavaScript](javascript.md)
