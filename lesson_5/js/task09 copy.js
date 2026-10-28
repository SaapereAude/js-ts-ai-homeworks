"use strict";
// Задача 9: Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).
// Розв'язок та вивід на сторінку
if (confirm("Почати тестування?")) {
    const minNumber = 1;
    const maxNumber = 10;
    let isGuessed = false;
    while (!isGuessed) {
        const randomNumber = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
        isGuessed = confirm(`Число: ${randomNumber}. Я вгадав?`);
    }
    alert(`Я вгадав!`);
}
