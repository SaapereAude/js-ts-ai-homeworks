"use strict";
// Задача 5: Вивести таблицю
// Розв'язок та вивід на сторінку
if (confirm("Почати тестування?")) {
    // Введення данних
    let cell = 1;
    //  Обчислення
    document.write("<table>");
    for (let r = 0; r < 3; r++) {
        document.write("<tr>");
        for (let c = 1; c <= 3; c++) {
            document.write(`<td> ${cell++} </td>`);
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
