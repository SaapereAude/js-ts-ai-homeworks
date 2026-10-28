"use strict";
// Задача 2: Створити 10 елементів для введення цін продуктів
// Розв'язок та вивід на сторінку
if (confirm("Почати тестування?")) {
    for (let i = 1; i <= 10; i++) {
        document.write(`
							<label for="${i}">Product #${i}</label>
							<input type="number" id="${i}"> <br>
						`);
    }
}
