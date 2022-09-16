async function getPosts(id) { // Асинхронная функция всегда возвращает промис (оборачивает все в промис)
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) // Заставляет весь стек ожидать выполнения этой функции
	return response.json()
}

getPosts(1)
	.then(data => console.log(data))
	.catch(error => console.log(error))

/////////////// C try catch

async function getPostsTry(id) { // Асинхронная функция всегда возвращает промис (оборачивает все в промис)
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) // Заставляет весь стек ожидать выполнения этой функции
		return response.json()
	}
	catch (error) {
		console.log(error)
		return Promise.reject(error) // Для внешней обработки ошибки
	}
}

getPostsTry(2)
	.then(data => console.log(data))
	.catch(error => console.log(error))

/////////////// Несколько асинхронных функций с одновременным запуском

async function getAll() {
	const [result1, result2] = await Promise.all([getPosts(1), getPostsTry(2)])
	return [result1, result2]
}

getAll().then(res => console.log(res[0], res[1]))
