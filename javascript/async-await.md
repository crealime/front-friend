## [Async-await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

Async function always returns a promise (wraps everything in a promise)

```javascript
async function getPosts(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) // Multiple await are always executed sequentially
  return response.json()
}

getPosts(1)
  .then(data => console.log(data))
  .catch(error => console.log(error))
```

### Example with try / catch

```javascript
async function getPostsTry(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.json()
  } 
  catch (error) {
    console.log(error)
    return Promise.reject(error) // For external error handling
  }
}

getPostsTry(2)
  .then(data => console.log(data))
  .catch(error => console.log(error))
```

### Running multiple asynchronous functions at the same time

```javascript
async function getAll() {
  const [result1, result2] = await Promise.all([getPosts(1), getPosts(2)])
  return [result1, result2]
}

getAll().then(res => console.log(res[0], res[1]))
```
