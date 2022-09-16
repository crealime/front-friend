//////////////////// Get запрос Ajax через XMLHttpRequest

const xhr = new XMLHttpRequest() // Создание экземпляра класса XMLHttpRequest
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts') // Настройка подключения к серверу
xhr.addEventListener('load', () => {
	const response = JSON.parse(xhr.responseText) // Ответ от сервера
	console.log(response)
})
xhr.addEventListener('error', () => {
	console.log(xhr.responseText) // Ответ при ошибке подключения
})
xhr.send() // Отправка запроса (асинхронного)

//////////////////// Post запрос Ajax через XMLHttpRequest

let body = JSON.stringify({
	title: 'foo',
	body: 'bar',
	userId: 1
})
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts') // Настройка подключения к серверу
xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
xhr.addEventListener('load', () => {
	const response = JSON.parse(xhr.responseText) // Ответ от сервера
	console.log(response)
})
xhr.addEventListener('error', () => {
	console.log(xhr.responseText) // Ответ при ошибке подключения
})
xhr.send(body) // Отправка запроса (асинхронного)