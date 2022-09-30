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
---
[Home](/README.md) > [JavaScript](javascript.md)