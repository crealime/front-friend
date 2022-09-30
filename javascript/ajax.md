## [Ajax](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX "Ajax")

### Get Ajax request via XMLHttpRequest
```javascript
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')
xhr.addEventListener('load', () => {
  const response = JSON.parse(xhr.responseText)
  console.log(response)
})
xhr.addEventListener('error', () => {
  console.log(xhr.responseText)
})
xhr.send()
```

### Post Ajax request via XMLHttpRequest
```javascript
let body = JSON.stringify({
	title: 'foo',
	body: 'bar',
	userId: 1
})
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts')
xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
xhr.addEventListener('load', () => {
	const response = JSON.parse(xhr.responseText)
	console.log(response)
})
xhr.addEventListener('error', () => {
	console.log(xhr.responseText)
})
xhr.send(body)
```

---
[Home](/README.md) > [JavaScript](javascript.md)
