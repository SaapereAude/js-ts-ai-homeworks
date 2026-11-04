// Задача 6: Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

// Розв'язок та вивід на сторінку
function buildTable(rows:number, columns:number, message:string):void {
	document.write("<table>")
	for (let i = 0; i < rows; i++) {
		document.write("<tr>")
		for (let j = 0; j < columns; j++) {
			document.write(`<td> ${message} </td>`)
		}
		document.write("</tr>")
	}
	document.write("</table>")
}

const userRows = parseInt(prompt("Будь ласка введіть кількість рядків таблиці:")!)
const userColumns = parseInt(prompt("Будь ласка введіть кількість колонок таблиці:")!)
const userMessage = prompt("Будь ласка введіть повідомлення:")!

buildTable(userRows, userColumns, userMessage)
