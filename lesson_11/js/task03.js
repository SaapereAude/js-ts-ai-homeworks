"use strict";
// Задача 3: Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.
// Розв'язок та вивід на сторінку
// 1. Генеруємо ігрове поле - двовимірний масив, який спочатку заповнений нулями
const field = Array.from({ length: 6 }, () => Array(6).fill(0));
// Виводимо на сторінку поле заповнене нулями
// for (let i = 0; i < field.length; i++) {
// 	document.write(`${field[i].join(" ")} <br>`)
// }
// document.write(`<br>`)
// 2. Заповнюємо поле кораблями (5 кораблів)
let shipsOnField = 0; //кількість кораблів на полі
const maxShipsOnField = 5; //максимальна кількість кораблів
// Цикл продовжується поки поле 6*6 (індекси 0-5) не буде заповнене 5 кораблями
while (shipsOnField < maxShipsOnField) {
    // Рядок та колонка - випадкові індекси від 0 до 5
    const row = Math.floor(Math.random() * 6);
    const column = Math.floor(Math.random() * 6);
    // Позиція, на якій знаходиться корабель змінюється з 0 на 1.
    // Якщо клітинка вільна (0) - розміщуємо корабель (1) і збільшуємо лічильник кількості кораблів на 1.
    // Також, таким чином не вдастся размістити два кораблі на одній клітинці
    if (field[row][column] === 0) {
        field[row][column] = 1;
        shipsOnField++;
    }
}
// Виводимо поле на сторінку
for (let i = 0; i < field.length; i++) {
    document.write(`${field[i].join(" ")} <br>`);
}
document.write(`<br>`);
// 3. Обробка пострілу
let remainShips = 5; //скільки кораблів залишилось
const maxShots = 10;
let remainShots = maxShots; //скільки пострілів залишилось
while (remainShips > 0 && remainShots > 0) {
    // Координати пострілу користувача
    const userRow = parseInt(prompt("Введіть номер рядка: "));
    const userColumn = parseInt(prompt("Введіть номер колонки: "));
    // Механізм обробки пострілу
    if (userRow >= 1 && userRow <= 6 && userColumn >= 1 && userColumn <= 6) {
        // 0 - пуста клітинка, 1 - клітинка з кораблем, 2 - пуста клітинка, в яку користувач стріляв, 3 - клітинка з підбитим кораблем
        // Перший елемент масиву починається з 0, а користувач вводить координати починаючи з 1, тому потрібно віднімати 1 від введенних користувачем даних 
        if (field[userRow - 1][userColumn - 1] === 1) {
            alert("Ви влучили, корабель потоплено");
            field[userRow - 1][userColumn - 1] = 3;
            remainShots--;
            remainShips--;
            alert(`Пострілів залишилось: ${remainShots}. Кораблів залишилось: ${remainShips}.`);
        }
        else if (field[userRow - 1][userColumn - 1] === 0) {
            alert("Промах!");
            field[userRow - 1][userColumn - 1] = 2;
            remainShots--;
            alert(`Пострілів залишилось: ${remainShots}. Кораблів залишилось: ${remainShips}.`);
        }
        else {
            alert("Ви вже стріляли в цю клітинку, виберіть іншу");
        }
    }
    else {
        alert("Некоректні координати! Введіть значення від 1 до 6.");
    }
}
// Результати гри
if (remainShips === 0) {
    document.write(`Вітаю! Ви потопили всі кораблі за ${maxShots - remainShots} спроб!`);
}
else {
    document.write(`Нажаль ви не змогли знайти всі кораблі. Ви знайшли лише ${5 - remainShips} кораблі.`);
}
