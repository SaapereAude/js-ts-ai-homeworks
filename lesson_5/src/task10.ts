// Задача 10: Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.

// Розв'язок та вивід на сторінку

if (confirm("Почати тестування?")) {
	// Введення данних
	const userNum1 = parseInt(prompt("Введіть перше число")!)
	const userNum2 = parseInt(prompt("Введіть друге число")!)
	const minNum = Math.min(userNum1, userNum2)
	const maxNum = Math.max(userNum1, userNum2)
	let sum = 0

	//  Обчислення
	for (let i = minNum + 1; i < maxNum; i++) {
		if (i % 2 !== 0) {
			sum += i
		}
	}

	document.write(`<p><span>Сума непарних чисел: ${sum}</span></p>`)
}
