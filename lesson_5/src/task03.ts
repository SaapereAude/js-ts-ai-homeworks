// Задача 3: Вивести таблицю з одним рядком і  7 стовпцями.

// Розв'язок та вивід на сторінку
if (confirm("Почати тестування?")) {
	document.write("<table>")
		document.write("<tr>")
			for (let c = 0; c < 7; c++) {
				document.write(`<td>${c}</td>`)
			}
		document.write("</tr>")
	document.write("</table>")
}
