// Задача 1: Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.

if (confirm("Почати тестування?")) {
	//1. Введення даних:
	const minValue = 1 
	const maxValue = 100 
	let userNumQuantity = parseInt(prompt("Будь ласка, введіть бажану кількість випадкових чисел:")!) 
	let result = ""

	//2. Обчислення
	for (let i = 1; i <= userNumQuantity; i++) {
		let randNumber = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
		result += `<li class="list-result__item">${randNumber}</li>`
	}
	// 3. Виведення на сторінку
	document.write(`
						<ul class="list-result">
							${result}
						</ul>
					`)
}
