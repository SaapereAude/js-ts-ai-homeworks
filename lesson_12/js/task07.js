"use strict";
// Задача 7: Cформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів). Заповнити його випадковим чином.
// Підрахувати для кожного рядка кількість неділь.
const weekdaysList = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
// Генеруємо двовимірний масив, який заповнений випадковими значеннями
function getRandomNumber(minValue, maxValue) {
    return minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
}
const table = Array.from({ length: 4 }, () => Array.from({ length: 8 }, () => weekdaysList[getRandomNumber(0, 6)]));
// Вивід масиву на сторінку
for (let i = 0; i < table.length; i++) {
    document.write(`${table[i].join(", ")} <br>`);
}
document.write(`<br>`);
// Знаходимо неділі
for (let row = 0; row < table.length; row++) {
    let sundayCount = 0;
    for (let col = 0; col < table[row].length; col++) {
        if (table[row][col] === "Неділя")
            sundayCount++;
    }
    document.write(`У рядку ${row + 1} є ${sundayCount} неділь <br>`);
}
