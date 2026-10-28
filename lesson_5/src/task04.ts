// Задача 4: Вивести таблицю з 3 рядків і 7 стовпців

// Розв'язок та вивід на сторінку
if (confirm("Почати тестування?")) {
	document.write("<table>")
	for (let r = 1; r <= 3; r++) {
		document.write("<tr>")
			for (let c = 1; c <= 7; c++) {
				document.write(`<td>${c}</td>`)
			}
		document.write("</tr>")
	}
	document.write("</table>")
}
