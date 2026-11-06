"use strict";
// Задача 1: Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії
// він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і
// відмінно), трійочник(є хоча би одна трійка)).
// Розв'язок та вивід на сторінку
const quantityOfGrades = parseInt(prompt("Будь ласка введіть кількість предметів:")); // кількість предметів
const studentsGrades = getGrades(quantityOfGrades); //Отримуємо масив у змінну
const averageGrade = getAverageGrade(studentsGrades); //Отримуємо середнє значення оцінок у змінну (для виводу результатів на сторінку)
const studentsCategory = getStudentsCategory(getMinimalGrade(studentsGrades)); //Отримуємо категорію студента у змінну (для виводу результатів на сторінку)
//Функція для введення елементів масиву
function getGrades(quantityOfGrades) {
    let grades = [];
    for (let i = 0; i < quantityOfGrades; i++) {
        let userGrades = parseInt(prompt("Будь ласка введіть оцінку:"));
        grades.push(userGrades);
    }
    return grades;
}
// Функція для заходження середнього балу
function getAverageGrade(studentsGrades) {
    let sumGrades = 0; // сума оцінок
    for (let i = 0; i < studentsGrades.length; i++) {
        sumGrades += studentsGrades[i];
    }
    return sumGrades / studentsGrades.length;
}
// Функція для заходження мінімального значення
function getMinimalGrade(studentsGrades) {
    let minGrade = studentsGrades[0];
    for (let i = 1; i < studentsGrades.length; i++) {
        if (minGrade > studentsGrades[i])
            minGrade = studentsGrades[i];
    }
    return minGrade;
}
// Функція для визначення категорії студента
function getStudentsCategory(minGrade) {
    let category = "";
    switch (minGrade) {
        case 2:
            category = "двійочник";
            break;
        case 3:
            category = "трійочник";
            break;
        case 4:
            category = "хорошист";
            break;
        case 5:
            category = "відмінник";
            break;
        default:
            throw new Error("Некоректна оцінка");
    }
    return category;
}
document.write(`
							<div class="solution__list list ">
								<div class="list__item">
									<h2 class="list__title">Результати:</h2>
									<p class="list__result-text">Оцінки студента: <span>${studentsGrades}</span> </p>
									<p class="list__result-text">Середнє значення оцінок: <span>${averageGrade}</span></p>
									<p class="list__result-text">Категорія студента: <span>${studentsCategory}</span></p>
								</div>
							</div>
						`);
