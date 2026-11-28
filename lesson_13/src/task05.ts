// Задача 5: З використанням замикань розробити ітератор,
// тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального.
// Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців.

function getMonthCounter(min: number = 1, max: number = 12): () => number {
	let monthNumber = min - 1 // Починаємо з першого мясяця
	function getNextMonth(): number {
		// Перевіряємо: якщо номер місяця вже досягнув 12, то тоді наступне значення monthNumber скидуємо в мінімальне значення (1 за замовченням), тобто починаємо знову з мінімального
		if (monthNumber === max) {
			monthNumber = min
		} else {
			// А поки monthNumber не досягнув максимального значення - збільшуємо monthNumber на 1 і повертаємо його
			++monthNumber
		}
		return monthNumber
	}
	return getNextMonth
}

let monthIterator = getMonthCounter()
for (let i = 0; i < 30; i++) {
	document.write(`${monthIterator()}<br>`)
}
