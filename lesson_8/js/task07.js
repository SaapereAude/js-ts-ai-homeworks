"use strict";
// Задача 7: Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// 1) за весь рік; (12)
// 2) у першій половині року; (0-5)
// 3) у другій половині року; (6-11)
// 4) за літо; (4-6)
// 5) за ІІ квартал; (3-5)
// 6) за парні місяці (з парними номерами); (%2)
// 7) за місяці, які є початковими у сезоні (весна, літо, осінь, зима).(%3)
// Розв'язок та вивід на сторінку
const utilityBills = [4000, 4500, 3500, 3200, 3000, 2500, 2400, 2100, 2000, 2700, 3000, 4000];
function getBillsSum(utilityBillsArray, startIndex, endIndex, step = 1) {
    let sum = 0;
    for (let i = startIndex; i <= endIndex; i += step) {
        sum += utilityBillsArray[i];
    }
    return sum;
}
// 1) за весь рік; (0-11)
const entireYearBills = getBillsSum(utilityBills, 0, 11);
// 2) у першій половині року; (0-5)
const firstHalfYearBills = getBillsSum(utilityBills, 0, 5);
// 3) у другій половині року; (6-11)
const secondHalfYearBills = getBillsSum(utilityBills, 6, 11);
// 4) за літо; (4-6)
const summerBills = getBillsSum(utilityBills, 4, 6);
// 5) за ІІ квартал; (3-5)
const secondQuarterBills = getBillsSum(utilityBills, 3, 5);
// 6) за парні місяці (з парними номерами);
// 	Місяці: 2, 4, 6, 8, 10, 12 - тобто це місяці кратні 2.
// 	Щоб початковим місяцем був 2, потрібно починати з 1-го елементу масиву, тобто с індексу 1
const evenMonthBills = getBillsSum(utilityBills, 1, 11, 2);
// 7) за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
// 	Місяці: 12, 3, 6, 9; - тобто це місяці кратні 3.
// 	Щоб початковим місяцем був 3, потрібно починати з 2-го елементу масиву, тобто с індексу 2
const firstMonthOfSeasonBills = getBillsSum(utilityBills, 2, 11, 3);
document.write(`
	<div class="solution__list list ">
		<div class="list__item">
			<h2 class="list__title">Результати:</h2>
			<p class="list__result-text">1) Масив з платіжками за кожен місяць на протязі року: <span>${utilityBills}</span></p>
			<p class="list__result-text">1) Сумарна кількість грошей за весь рік: <span>${entireYearBills}</span></p>
			<p class="list__result-text">2) Сумарна кількість грошей за першу половину року: <span>${firstHalfYearBills}</span></p>
			<p class="list__result-text">3) Сумарна кількість грошей за другу половину року: <span>${secondHalfYearBills}</span></p>
			<p class="list__result-text">4) Сумарна кількість грошей за літо: <span>${summerBills}</span></p>
			<p class="list__result-text">5) Сумарна кількість грошей за ІІ квартал: <span>${secondQuarterBills}</span></p>
			<p class="list__result-text">6) Сумарна кількість грошей за парні місяці: <span>${evenMonthBills}</span></p>
			<p class="list__result-text">7) Сумарна кількість грошей за місяці, які є початковими у сезоні (весна, літо, осінь, зима): <span>${firstMonthOfSeasonBills}</span> </p>
		</div>
	</div>
`);
