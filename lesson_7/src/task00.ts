// Задача 0: Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

// Розв'язок та вивід на сторінку

function getSeason(monthNumber: string): string {
	let season: string
	switch (monthNumber) {
		case "12":
		case "1":
		case "2":
			season = "зима"
			break
		case "3":
		case "4":
		case "5":
			season = "весна"
			break
		case "6":
		case "7":
		case "8":
			season = "літо"
			break
		case "9":
		case "10":
		case "11":
			season = "осінь"
			break
		default:
			throw new Error("Ви ввели невірний номер місяця. Будь ласка, введіть коректне число від 1 до 12")
	}
	return season
}

const monthNumber:string = prompt("Введіть номер місяця (від 1 до 12):", "6")!

document.write(`
							<div class="solution__list list ">
								<div class="list__item">
									<h2 class="list__title">Результати:</h2>
									<p class="list__result-text">Ви ввели: ${monthNumber} - це <span>${getSeason(monthNumber)}</span></p>
								</div>
							</div>
						`)
