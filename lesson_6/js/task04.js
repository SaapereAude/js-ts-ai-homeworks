"use strict";
// Задача 4: Побудувати ялинку
// Розв'язок та вивід на сторінку
if (confirm("Почати тестування?")) {
    for (let section = 0; section < 3; section++) {
        for (let row = 1; row <= 5; row++) {
            for (let symb = 0; symb < row; symb++) {
                document.write("<span>o</span>");
            }
            document.write("<br>");
        }
    }
}
