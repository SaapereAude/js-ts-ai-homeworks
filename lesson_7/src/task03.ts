// Задача 3:  Створити окремі функції, які для 4 чисел знаходять: 1. суму; 2. добуток; 3. середнє арифметичне; 4. мінімальне значення.

// Розв'язок та вивід на сторінку
// знаходження суми
function getSum(num1: number, num2: number, num3: number, num4: number): number {
	return num1 + num2 + num3 + num4
}
// знаходження добутку
function getMultiplication(num1: number, num2: number, num3: number, num4: number): number {
	return num1 * num2 * num3 * num4
}
//знаходження середнього арифметичного
function getArithmeticMean(num1: number, num2: number, num3: number, num4: number): number {
	return (num1 + num2 + num3 + num4) / 4
}
// знаходження мінімального значення
function getMinValue(num1: number, num2: number, num3: number, num4: number): number {
	let minNum = num1
	if (num2 < minNum) minNum = num2
	if (num3 < minNum) minNum = num3
	if (num4 < minNum) minNum = num4
	return minNum
}
const userNum1: number = parseFloat(prompt("Введіть перше число:")!)
const userNum2: number = parseFloat(prompt("Введіть друге число:")!)
const userNum3: number = parseFloat(prompt("Введіть третє число:")!)
const userNum4: number = parseFloat(prompt("Введіть четверте число:")!)

document.write(`
							<div class="solution__list list ">
								<div class="list__item">
									<h2 class="list__title">Результати:</h2>
									<p class="list__result-text">Ви ввели: ${userNum1}, ${userNum2}, ${userNum3}, ${userNum4}</p>
									<p class="list__result-text">Сума: <span>${getSum(userNum1, userNum2, userNum3, userNum4)}</span></p>
									<p class="list__result-text">Добуток: <span>${getMultiplication(userNum1, userNum2, userNum3, userNum4)}</span></p>
									<p class="list__result-text">Середнє арифметичне: <span>${getArithmeticMean(userNum1, userNum2, userNum3, userNum4)}</span></p>
									<p class="list__result-text">Мінімальне значення: <span>${getMinValue(userNum1, userNum2, userNum3, userNum4)}</span></p>
								</div>
							</div>
						`)
