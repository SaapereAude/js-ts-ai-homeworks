"use strict";
// Задача 3: Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
// Розв'язок та вивід на сторінку
const quantityOfNames = parseInt(prompt("Будь ласка введіть кількість учнів:")); // кількість імен учнів
const targetName = prompt("Будь ласка введіть ім’я, яке ви хочете порахувати скільки разів воно зустрічається:", "Іван");
const studentsNamesArr = getStudentsNames(quantityOfNames); //Отримуємо масив з іменами учнів у змінну
const quantityOfTargetNames = getTargetNameCount(studentsNamesArr, targetName); //Отримуємо кількість разів, коли зустрічалося шукані ім'я
//Функція для введення елементів масиву
function getStudentsNames(quantityOfNames) {
    let names = [];
    for (let i = 0; i < quantityOfNames; i++) {
        let studentName = prompt("Будь ласка введіть імена:");
        names.push(studentName);
    }
    return names;
}
//Функція для знаходження шуканого імені
function getTargetNameCount(studentsNamesArr, targetName) {
    let targetNameCounter = 0;
    for (let i = 0; i < studentsNamesArr.length; i++) {
        if (studentsNamesArr[i] === targetName)
            targetNameCounter++;
    }
    return targetNameCounter;
}
document.write(`
							<div class="solution__list list ">
								<div class="list__item">
									<h2 class="list__title">Результати:</h2>
									<p class="list__result-text">Кількість учнів: <span>${quantityOfNames}</span> </p>
									<p class="list__result-text">Імена: <span>${studentsNamesArr}</span></p>
									<p class="list__result-text">Кількість разів коли зустрічається ім’я ${targetName}.: <span>${quantityOfTargetNames}</span></p>
								</div>
							</div>
						`);
