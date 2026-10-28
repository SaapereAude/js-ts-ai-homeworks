// Задача 8: Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).:

// Розв'язок та вивід на сторінку
if (confirm("Почати тестування?")) {
	// Введення данних
	const minNumber = 1
	const maxNumber = 10
	let isGuessed = false

	//  Обчислення
	for (let i = 1; i <= 3; i++) {
		const compNumber = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
		let userAnswer = confirm(`Число: ${compNumber}. Я вгадав?`)
		if (userAnswer) {
			alert(`Я вгадав за ${i} спроби`)
			isGuessed = true
			break
		}
	}
	if (!isGuessed) {
		alert(`Я не вгадав за 3 спроби`)
	}
}
