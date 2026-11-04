"use strict";
// Задача 2: Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
// Розв'язок та вивід на сторінку
function getWorkDay(dayNumber) {
    let dayStatus;
    switch (dayNumber) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
            dayStatus = "робочий день";
            break;
        case "6":
        case "7":
            dayStatus = "вихідний";
            break;
        default:
            throw new Error("Ви ввели невірний номер дня тижня. Введіть коректне число від 1 до 7");
    }
    return dayStatus;
}
const dayNumber = prompt("Будь ласка, введіть номер дня (від 1 до 7):", "7");
document.write(`
							<div class="solution__list list ">
								<div class="list__item">
									<h2 class="list__title">Результати:</h2>
									<p class="list__result-text">Ви ввели: ${dayNumber} - це <span>${getWorkDay(dayNumber)}</span></p>
								</div>
							</div>
						`);
