"use strict";
// Задача 4: З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
//1. Введення даних:
const userAge = parseInt(prompt('Будь ласка, введіть ваш вік:', '1'));
let professionResult;
//2.  Розв'язок 
if (userAge < 1 || userAge > 120) {
    professionResult = 'Некорректний вік';
}
else if (userAge <= 7) {
    professionResult = 'Дитина у садочку';
}
else if (userAge <= 17) {
    professionResult = 'Дитина у школі';
}
else if (userAge <= 22) {
    professionResult = 'Студент';
}
else if (userAge <= 65) {
    professionResult = 'Працівник';
}
else {
    professionResult = 'Пенсіонер';
}
