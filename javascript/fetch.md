## [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

### Get Ajax request via Fetch
```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then(json => console.log(json))
  .catch(error => console.log(error))
```

### Post Ajax request via Fetch
```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then(json => console.log(json))
  .catch(error => console.log(error))
```

### Example with try / catch
```javascript
try {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        console.error(response.statusText)
        return Promise.reject(response.statusText)
      }
      return response.json()
    })
}
catch (err) {
  console.error(err)
  return Promise.reject(err)
}
```
---
[Home](/README.md) > [JavaScript](javascript.md)
