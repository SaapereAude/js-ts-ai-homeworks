"use strict";
// Задача 3:  Відобразити трикутник за допомогою символів «о»
// Розв'язок та вивід на сторінку
if (confirm("Почати тестування?")) {
    for (let row = 0; row < 12; row++) {
        for (let symb = row; symb < 12; symb++) {
            document.write('<span>o</span>');
        }
        document.write('<br>');
    }
}
