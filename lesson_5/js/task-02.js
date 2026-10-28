"use strict";
// Задача -2: Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.
//1. Введення даних:
const minValue = 1; //Мінімальне значення для генератора випадкових чисел
const maxValue = 1000; //Максимальне значення для генератора випадкових чисел
let evenNumber = 0; //змінна для лічильника парних чисел
let oddNumber = 0; //змінна для лічильника непарних чисел
let randNumber; //змінна для генератора випадкових чисел від 1 до 1000
let result = "";
let compareResult = "";
if (confirm("Почати тестування?")) {
    //2. Обчислення
    for (let i = 1; i <= 100; i++) {
        randNumber = minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
        result += `${i}: ${randNumber} <br>`;
        if (randNumber % 2 === 0) {
            evenNumber++;
        }
        else {
            oddNumber++;
        }
    }
    if (evenNumber > oddNumber) {
        compareResult = "Парних чисел більше";
    }
    else if (evenNumber < oddNumber) {
        compareResult = "Непарних чисел більше";
    }
    else {
        compareResult = "Парних і непарних чисел порівну";
    }
    // 3. Розв'язок та вивід на сторінку
    document.write(`		
						<section class="page-task01__section solution">
							<div class="solution__container">
								<div class="solution__list list ">
									<div class="list__item">
										<h2 class="list__title">Результати:</h2>
										<p class="list__result-text">Парні числа: <span>${evenNumber}</span></p>
										<p class="list__result-text">Непарні числа: <span>${oddNumber}</span></p>
										<p class="list__result-text"><span>${compareResult}</span></p>
										<p>Випадкові числа: </p>
											${result}
									</div>
								</div>
							</div>
						</section>
					`);
}
