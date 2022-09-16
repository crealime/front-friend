const promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve(Math.random()), 1000) // При срабатывании промиса
	// setTimeout(() => reject('Error!'), 1000) // При ошибке промиса
})

promise
	.then(x => { // Цепочки выполнения после ответа промиса
		console.log(x)
		return x
	})
	.then(y => {
		console.log(y)
		return y
	})
	.catch(error => console.log(error)) // Выпадение в ошибку
	.finally(() => console.log('Finally')) // Выполнится в любом случае

Promise.all([
	// Передать промисы или функции, возвращающие промисы для общего их выполнения
]).then((data) => console.log(data)) // Результаты работы всех промисов в виде массива
