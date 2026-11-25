"use strict";
// Задача 3: Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
// Розв'язок та вивід на сторінку
// Масив з 30 елементів від 1 до 10000
const randomNumbsArray = Array.from({ length: 30 }, () => 1 + Math.floor(Math.random() * 10000));
function insertionSort(randomArr) {
    let countSwaps = 0;
    for (let i = 1; i < randomArr.length; i++) {
        const currentElement = randomArr[i];
        let k = i - 1;
        while (k >= 0 && randomArr[k] > currentElement) {
            randomArr[k + 1] = randomArr[k];
            k--;
            countSwaps++;
        }
        randomArr[k + 1] = currentElement;
    }
    return [randomArr, countSwaps];
}
const [randomArr, countSwaps] = insertionSort(randomNumbsArray);
document.write(`Масив: ${randomArr.join(", ")} <br>`);
document.write("<br>");
document.write(`Кількість обмінів: ${countSwaps}`);
