"use strict";
// Задача 4: Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.
/*
function getEvenNumbers(num1: number, num2: number, num3: number): number {
    let evenNumbers: number = 0
    if (num1 % 2 === 0) evenNumbers++
    if (num2 % 2 === 0) evenNumbers++
    if (num3 % 2 === 0) evenNumbers++
    return evenNumbers
}

function getPositiveNumbers(num1: number, num2: number, num3: number): number {
    let positiveNumbers: number = 0
    if (num1 > 0) positiveNumbers++
    if (num2 > 0) positiveNumbers++
    if (num3 > 0) positiveNumbers++
    return positiveNumbers
}

function getMoreThanHundred(num1: number, num2: number, num3: number): number {
    let moreThanHundred: number = 0
    if (num1 > 100) moreThanHundred++
    if (num2 > 100) moreThanHundred++
    if (num3 > 100) moreThanHundred++
    return moreThanHundred
}

//Числа, які вводить користувач:
const userNumber1: number = parseFloat(prompt("Будь ласка введіть перше число:")!)
const userNumber2: number = parseFloat(prompt("Будь ласка введіть друге число:")!)
const userNumber3: number = parseFloat(prompt("Будь ласка введіть третє число:")!)

const evenNumbers: number = getEvenNumbers(userNumber1, userNumber2, userNumber3)
const positiveNumbers: number = getPositiveNumbers(userNumber1, userNumber2, userNumber3)
const moreThanHundred: number = getMoreThanHundred(userNumber1, userNumber2, userNumber3)

document.write(`
                        <div class="solution__list list ">
                            <div class="list__item">
                                <h2 class="list__title">Результати:</h2>
                                <p class="list__result-text">Ви ввели: ${userNumber1}, ${userNumber2}, ${userNumber3}</p>
                                <p class="list__result-text">Кількість парних чисел: <span>${evenNumbers}</span></p>
                                <p class="list__result-text">Кількість додатних чисел: <span>${positiveNumbers}</span></p>
                                <p class="list__result-text">Кількість чисел більших за 100: <span>${moreThanHundred}</span></p>
                            </div>
                        </div>
                    `)

*/
// Варіант 2
// Розв'язок та вивід на сторінку
function getNumbersCount(num1, num2, num3) {
    // Змінні для зберігання реузльтатів:
    let evenNumbers = 0; //Кількість парних чисел
    let positiveNumbers = 0; //Кількість додатних чисел
    let moreThanHundred = 0; //Кількість чисел більших за 100
    // Кількість парних чисел
    if (num1 % 2 === 0)
        evenNumbers++;
    if (num2 % 2 === 0)
        evenNumbers++;
    if (num3 % 2 === 0)
        evenNumbers++;
    // Кількість додатних чисел
    if (num1 > 0)
        positiveNumbers++;
    if (num2 > 0)
        positiveNumbers++;
    if (num3 > 0)
        positiveNumbers++;
    // Кількість чисел, які більші за 100
    if (num1 > 100)
        moreThanHundred++;
    if (num2 > 100)
        moreThanHundred++;
    if (num3 > 100)
        moreThanHundred++;
    return `
		Кількість парних чисел: <span>${evenNumbers}</span><br>
		Кількість додатних чисел: <span>${positiveNumbers}</span><br>
		Кількість чисел більших за 100: <span>${moreThanHundred}</span>
	`;
}
//Числа, які вводить користувач:
const userNumber1 = parseFloat(prompt("Будь ласка введіть перше число:"));
const userNumber2 = parseFloat(prompt("Будь ласка введіть друге число:"));
const userNumber3 = parseFloat(prompt("Будь ласка введіть третє число:"));
const result = getNumbersCount(userNumber1, userNumber2, userNumber3);
//Вивід результатів:
document.write(`
						<div class="solution__list list ">
							<div class="list__item">
								<h2 class="list__title">Результати:</h2>
								<p class="list__result-text">Ви ввели: ${userNumber1}, ${userNumber2}, ${userNumber3}</p>
								<p class="list__result-text">${result}</p>
							</div>
						</div>
					`);
