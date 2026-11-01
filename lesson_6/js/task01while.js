"use strict";
// Задача 1: З клавіатури вводитяться числа поки не буде введено 0. Знайти суму чисел.
if (confirm("Почати тестування?")) {
    // Розв'язок та вивід на сторінку
    let userNum;
    let sum = 0;
    do {
        userNum = parseFloat(prompt("Введіть число"));
        sum += userNum;
        document.write(`<p class="output-text">Ви ввели число: ${userNum}, </p>`);
    } while (userNum !== 0);
    document.write(`<p class="output-text">Сума чисел: ${sum}</p>`);
}
