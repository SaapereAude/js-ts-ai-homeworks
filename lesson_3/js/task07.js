"use strict";
// Задача 7: З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
//1. Введення даних:
let monthNumber = prompt('Будь ласка, введіть номер місяця (від 1 до 12):', '6'); //номер місяця, який вводить користувач
let season;
//2.Розв'язок 
switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        season = 'зима';
        break;
    case '3':
    case '4':
    case '5':
        season = 'весна';
        break;
    case '6':
    case '7':
    case '8':
        season = 'літо';
        break;
    case '9':
    case '10':
    case '11':
        season = 'осінь';
        break;
    default:
        alert('Будь ласка, введіть корректне числи від 1 до 12');
        break;
}
