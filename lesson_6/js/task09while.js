"use strict";
// Задача 9: З клавіатури вводиться пароль (правильний пароль- 78). Поки пароль не вірний дати можливість користувачу повторно ввести його.
// Розв'язок та вивід на сторінку
if (confirm("Почати тестування?")) {
    // Введення данних
    let userPassword = "";
    const correctPassword = "78";
    let successAuth = false;
    //  Обчислення
    do {
        userPassword = prompt("Будь ласка введіть пароль");
        if (userPassword === correctPassword) {
            successAuth = true;
        }
    } while (userPassword !== correctPassword);
    if (successAuth) {
        alert("Вітаю! Ви ввели правильний пароль!");
    }
}
