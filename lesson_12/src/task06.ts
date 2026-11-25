// Задача 6: Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.

if (confirm("Почати тестування?")) {
	// Масив імен
	const namesList = [
		"Yevhen",
		"Andrew",
		"Olga",
		"Dmytro",
		"Elena",
		"Anton",
		"Maria",
		"Taras",
		"Maksim",
		"Marina",
	]
	document.write(`Масив імен: ${namesList.join(", ")}`)

	document.write("<br>")

	// Сортуємо масив по довжині
	namesList.sort((a, b) => a.length - b.length)
	document.write(`Відсортований масив імен (по довжині): ${namesList.join(", ")}`)

	// Бінарний пошук в упорядкованому масиві імен
	function findNameAndIndex(array: string[], symbolsNumber:number) {
		let startIndex = 0
		let endIndex = array.length - 1
		while (startIndex <= endIndex) {
			const middleIndex: number = Math.floor((startIndex + endIndex) / 2)
			if (array[middleIndex].length === symbolsNumber) return middleIndex
			if (array[middleIndex].length < symbolsNumber) startIndex = middleIndex + 1
			else endIndex = middleIndex - 1
		}
		return -1
	}

	// Виклик функції пошуку та вивід результату на сторінку
	const searchNameAndIndex = findNameAndIndex(namesList, 5)
	if (searchNameAndIndex !== -1) {
		document.write(
			`<p>Ім'я довжиною 5 символів є у масиві та знаходиться під номером: ${searchNameAndIndex + 1} та має індекс ${searchNameAndIndex}</p>`,
		)
	} else {
		document.write(`<p>Імені довжиною 5 символів немає у масиві</p>`)
	}
}
