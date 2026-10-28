// Задача 0: Вивести на екран 8 кнопок з написом “Hello”.

if (confirm("Почати тестування?")) {
	for (let i = 1; i <= 8; i++) {
		document.write(`<button type="button" class="btn">${i}: Hello</button>`)
	}
}
