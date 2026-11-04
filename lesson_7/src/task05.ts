// Задача 5: Створити окремі функції, які переводять: 1. Сантиметри у дюйми; 2. Кілограми у фунти; 3. Кілометри у милі.

// Розв'язок та вивід на сторінку
function getInches(centimeters: number): number {
	return centimeters * 0.393701
}

function getLb(kilograms: number): number {
	return kilograms * 2.20462
}

function getMiles(kilometers: number): number {
	return kilometers * 0.621371
}
const userCentimeters: number = parseFloat(prompt("Введіть довжину у сантиметрах:")!)
const userKilograms: number = parseFloat(prompt("Введіть вагу у кілограмах:")!)
const userKilometers: number = parseFloat(prompt("Введіть довжину у кілометрах:")!)
document.write(`
							<div class="solution__list list ">
								<div class="list__item">
									<h2 class="list__title">Результати:</h2>
									<p class="list__result-text">${userCentimeters} см - це <span>${getInches(userCentimeters).toFixed(2)}</span> дюймів</p>
									<p class="list__result-text">${userKilograms} кг - це <span>${getLb(userKilograms).toFixed(2)}</span> фунтів</p>
									<p class="list__result-text">${userKilometers} км - це <span>${getMiles(userKilometers).toFixed(2)}</span> миль</p>
								</div>
							</div>
						`)
