"use strict";
// Задача 2: Відобразити трикутник за допомогою символів «о»
/*
о
оо
ооо
оооо
ооооо
оооооо
ооооооо
*/
// Розв'язок та вивід на сторінку
if (confirm("Почати тестування?")) {
    // Розв'язок та вивід на сторінку
    for (let row = 0; row < 7; row++) {
        for (let symb = 0; symb < row; symb++) {
            document.write("<span>o</span>");
        }
        document.write("<br>");
    }
}
