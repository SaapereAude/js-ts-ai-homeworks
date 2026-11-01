"use strict";
// Задача 2: З клавіатури вводитяться числа поки не буде введено 0. Знайти добуток чисел.
if (confirm("Почати тестування?")) {
    // Розв'язок та вивід на сторінку
    let userNum;
    let mult = 1;
    do {
        userNum = parseFloat(prompt("Введіть число"));
        if (userNum !== 0) {
            document.write(`<p class="output-text">Ви ввели число: ${userNum}, </p>`);
            mult = mult * userNum;
        }
        else
            (document.write(`<p class="output-text">Ви ввели число: ${userNum} - зупиняю цикл </p>`));
    } while (userNum !== 0);
    document.write(`<p class="output-text">Добуток чисел (без множення на 0): ${mult}</p>`);
}
