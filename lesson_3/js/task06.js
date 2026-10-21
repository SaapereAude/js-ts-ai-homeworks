"use strict";
// Задача 6: З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
//1. Введення даних: 
let dayNumber = parseInt(prompt('Будь ласка, введіть номер дня (від 1 до 7):', '7'));
let resultDay;
///2.Розв'язок 
switch (dayNumber) {
    case 1:
        resultDay = 'Понеділок';
        break;
    case 2:
        resultDay = 'Вівторок';
        break;
    case 3:
        resultDay = 'Середа';
        break;
    case 4:
        resultDay = 'Четвер';
        break;
    case 5:
        resultDay = 'П’ятниця';
        break;
    case 6:
        resultDay = 'Субота';
        break;
    case 7:
        resultDay = 'Неділя';
        break;
    default:
        alert('Будь ласка, введіть корректне числи від 1 до 7');
        break;
}
