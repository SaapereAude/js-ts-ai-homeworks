// Задача 6: Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком

// Розв'язок та вивід на сторінку
if (confirm("Почати тестування?")) {
	// Введення данних
	let cell = 1
	
	//  Обчислення
	for (let t = 0; t < 3; t++) {
		document.write("<table>")
			for (let r = 0; r < 3; r++) {
				document.write("<tr>")
					for (let c = 0; c < 3; c++) {
						document.write(`<td> ${cell++} </td>`)
					}
				document.write("</tr>")
			}
		document.write("</table>")
	}
}
