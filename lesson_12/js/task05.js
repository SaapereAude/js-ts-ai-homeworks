"use strict";
// Задача 5: Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
// Масив імен
const namesList = [
    "Yevhen",
    "Andrew",
    "Olga",
    "Dmytro",
    "Elena",
    "Anton",
    "Maria",
    "Taras",
    "Maksim",
    "Marina",
];
document.write(`Масив імен: ${namesList.join(", ")}`);
document.write("<br>");
// Сортуємо масив по алфавіту
namesList.sort();
document.write(`Відсортований масив імен (по алфавіту): ${namesList.join(", ")}`);
// Бінарний пошук в упорядкованому масиві імен
function findNameAndIndex(array, name) {
    let startIndex = 0;
    let endIndex = array.length - 1;
    while (startIndex <= endIndex) {
        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (array[middleIndex] === name)
            return middleIndex;
        if (array[middleIndex] < name)
            startIndex = middleIndex + 1;
        else if (array[middleIndex] > name)
            endIndex = middleIndex - 1;
    }
    return -1;
}
// Виклик функції пошуку та вивід результату на сторінку
const searchNameAndIndex = findNameAndIndex(namesList, "Olga");
if (searchNameAndIndex !== -1) {
    document.write(`<p>Ім'я Olga є у масиві та знаходиться під номером: ${searchNameAndIndex + 1} (або має індекс ${searchNameAndIndex})</p>`);
}
else {
    document.write(`<p>Імені Olga немає у масиві</p>`);
}
