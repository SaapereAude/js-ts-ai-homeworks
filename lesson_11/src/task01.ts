// Задача 1: Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
// 			1)	номери рядків від 0 до половини, стовпці від 0 до половини
// 			2)	номери рядків від 0 до половини, стовпці від половини до кінця
// 			3) номери рядків (від половини до кінця, стовпці від 0 до половини
// 			4) номери рядків від половини до кінця , стовпці від половини до кінця
// 			5) Суму парних рядків
// 			6) Суму непарних стовпців
// 			7) У парних рядках – непарні стовпці, у непарних – парні.

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Генеруємо двовимірний масив, який заповнений випадковими значеннями
function getRandomNumber(minValue: number, maxValue: number) {
	return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
}
function getRandomTable(rowsNum: number, colsNumber: number, minValue: number, maxValue: number) {
	return Array.from({ length: rowsNum }, () =>
		Array.from({ length: colsNumber }, () => getRandomNumber(minValue, maxValue)),
	)
}
const table = getRandomTable(4, 4, 1, 100)

// Вивід масиву на сторінку
for (let i = 0; i < table.length; i++) {
	document.write(`${table[i].join(", ")} <br>`)
}
document.write(`<br>`)

// Універсальна функція для обчислення
function getSumArea(
	array: number[][],
	startRowIndex: number,
	endRowIndex: number,
	startColIndex: number,
	endColIndex: number,
	stepRow: number = 1,
	stepCol: number = 1,
) {
	let sum: number = 0
	for (let rowIndex: number = startRowIndex; rowIndex <= endRowIndex; rowIndex+=stepRow) {
		for (let colIndex: number = startColIndex; colIndex <= endColIndex; colIndex+=stepCol) {
			sum += array[rowIndex][colIndex]
		}
	}
	return sum
}
// Задача 1: Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
// 1)	номери рядків від 0 до половини, стовпці від 0 до половини
const firstQuarterSum = getSumArea(table, 0, 1, 0, 1)
document.write(`1) Номери рядків від 0 до половини, стовпці від 0 до половини: ${firstQuarterSum} <br>`)

// 2)	номери рядків від 0 до половини, стовпці від половини до кінця
const secondQuarterSum = getSumArea(table, 0, 1, 2, 3)
document.write(`2) Номери рядків від 0 до половини, стовпці від половини до кінця: ${secondQuarterSum} <br>`)

// 3) номери рядків (від половини до кінця, стовпці від 0 до половини
const thirdQuarterSum = getSumArea(table, 2, 3, 0, 1)
document.write(`3) Номери рядків від половини до кінця, стовпці від 0 до половини: ${thirdQuarterSum} <br>`)

// 4) номери рядків від половини до кінця , стовпці від половини до кінця
const fourthQuarterSum = getSumArea(table, 2, 3, 2, 3)
document.write(
	`4) Номери рядків від половини до кінця , стовпці від половини до кінця: ${fourthQuarterSum} <br>`,
)

// 5) Суму парних рядків
// 	array,
// 	startRowIndex = 0,
// 	endRowIndex = 3,
// 	startColIndex = 0,
// 	endColIndex = 3,
// 	stepRow = 2,
// 	stepCol = 1
const evenRowsSum = getSumArea(table, 0, 3, 0, 3, 2)
document.write(
	`5) Сума парних рядків: ${evenRowsSum} <br>`,
)

// 6) Суму непарних стовпців
// 	array,
// 	startRowIndex = 0,
// 	endRowIndex = 3,
// 	startColIndex = 1,
// 	endColIndex = 3,
// 	stepRow = 1,
// 	stepCol = 2
const oddColSum = getSumArea(table, 0, 3, 1, 3, 1, 2)
document.write(
	`6) Сума непарних стовпців: ${oddColSum} <br>`,
)

// 7) У парних рядках – непарні стовпці, у непарних – парні.
// У парних рядках – непарні стовпці:
// 	array,
// 	startRowIndex = 0,
// 	endRowIndex = 3,
// 	startColIndex = 1,
// 	endColIndex = 3,
// 	stepRow = 2,
// 	stepCol = 2,
const evenRowsOddColSum = getSumArea(table, 0, 3, 1, 3, 2, 2)
document.write(`7.1) У парних рядках – непарні стовпці: ${evenRowsOddColSum}<br>`)

//  У непарних рядках – парні стовпці:
// 	array,
// 	startRowIndex = 1,
// 	endRowIndex = 3,
// 	startColIndex = 0,
// 	endColIndex = 2,
// 	stepRow = 2,
// 	stepCol = 2,
const oddRowsEvenColSum = getSumArea(table, 1, 3, 0, 2, 2, 2)

const evenOddSum = evenRowsOddColSum + oddRowsEvenColSum
document.write(`7.2) У непарних рядках – парні стовпці: ${oddRowsEvenColSum}<br>`)

document.write(`7.3) У парних рядках – непарні стовпці + у непарних – парні: ${evenOddSum}<br>`)

// Рішення з уроку 12
// let sum = 0
// for (let rowIndex = 0; rowIndex < table.length; rowIndex++) {
// 	const startColIndex = 1 - (rowIndex % 2)
// 	for (let colIndex = startColIndex; colIndex < table[0].length; colIndex+=2){
// 		sum += table[rowIndex][colIndex]
// 	}
// }
// document.write(`7.3) У парних рядках – непарні стовпці + у непарних – парні: ${sum}<br>`)