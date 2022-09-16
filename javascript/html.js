let idEl = document.getElementById('id-of-el') // Выбрать элемент по id
let selEl = document.querySelector('.class-of-el') // Выбрать элемент (первый) по любому селектору
let srlEls = document.querySelectorAll('.class-of-els') // Выбрать все элементы по любому селектору

///////////////////

document.addEventListener("DOMContentLoaded", function(event) { // Событие происходит после загрузки HTML, не дожидаясь загрузки стилей, изображений и фреймов
	console.log("DOM fully loaded and parsed");
})

window.addEventListener("load", function(event) { // Событие происходит после загрузки HTML и всех связанных ресурсов
	console.log("All resources finished loading!");
})

window.addEventListener('beforeunload', (event) => { // Спросить пользователя, действительно ли он хочет покинуть страницу
	// Отмените событие, как указано в стандарте.
	event.preventDefault();
	// Chrome требует установки возвратного значения.
	event.returnValue = '';
})

selEl.addEventListener('click', function (event) {
	event.preventDefault() // Отменить значение по умолчанию (event - событие)
	console.log('this') // Вывод в консоль объекта, на котором сработало событье
	console.log(event) // Вывод в консоль информации о событии
})

///////////////////

idEl.textContent = 'Some' // Назначить текстовое наполнение элемента
let idRlText = idEl.textContent // Получить текстовое наполнение элемента
idEl.innerText // Текстовое наполнение элемента
idEl.innerHTML // Html наполнение элемента

/////////////////// Манипуляция элементами

const fragment = document.createDocumentFragment() // Создание виртуального элемента для последующего наполнения его элементами DOM и помещения в существующее дерево, в которое попадут только его потомки
const div = document.createElement('div') // Создание элемента div
let p = document.createElement("p"); div.append(p) // Создание параграфа и вставка его в div
fragment.appendChild(div) // Вставка элемента во фрагмент



/////////////////// Манипуляция стилями

div.classList.add('class') // Добавление div класса class
div.classList.remove('class') // Удаление у div класса class
div.classList.toggle('class') // Переключение у div класса class
