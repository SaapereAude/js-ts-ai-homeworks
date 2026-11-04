// Задача 1: Створити функцію, яка за номером місяця повертає його назву.

// Розв'язок та вивід на сторінку
function getMonth(monthNumber: string): string {
	let month: string
	switch (monthNumber) {
		case "1":
			month = "Січень"
			break
		case "2":
			month = "Лютий"
			break
		case "3":
			month = "Березень"
			break
		case "4":
			month = "Квітень"
			break
		case "5":
			month = "Травень"
			break
		case "6":
			month = "Червень"
			break
		case "7":
			month = "Липень"
			break
		case "8":
			month = "Серпень"
			break
		case "9":
			month = "Вересень"
			break
		case "10":
			month = "Жовтень"
			break
		case "11":
			month = "Листопад"
			break
		case "12":
			month = "Грудень"
			break
		default:
			throw new Error("Ви ввели невірний номер місяця. Будь ласка, введіть коректне число від 1 до 12")
	}
	return month
}
const monthsNumber = prompt("Введіть номер місяця (від 1 до 12):", "6")!
document.write(`
							<div class="solution__list list ">
								<div class="list__item">
									<h2 class="list__title">Результати:</h2>
									<p class="list__result-text">Ви ввели: ${monthsNumber} - це <span>${getMonth(monthsNumber)}</span></p>
								</div>
							</div>
						`)
