"use strict";
// Задача 3:  З клавіатури вводиться початкове знчення суми. Поки сума є меншою за 100 додавати до неї числа, які вводяться з клавіатури.
if (confirm("Почати тестування?")) {
    // Розв'язок та вивід на сторінку
    let sum = parseFloat(prompt("Введіть початкову суму"));
    let userNum;
    while (sum < 100) {
        userNum = parseFloat(prompt("Введіть число"));
        sum += userNum;
        document.write(`<p class="output-text">Сума чисел: ${sum}</p>`);
    }
}
