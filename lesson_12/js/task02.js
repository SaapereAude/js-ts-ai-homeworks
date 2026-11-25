"use strict";
// Задача 2: Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.
// Розв'язок та вивід на сторінку
// Масив з 30 елементів від 1 до 10000
const randomNumsArray = Array.from({ length: 30 }, () => 1 + Math.floor(Math.random() * 10000));
function shakerSort(array) {
    let changeStatus;
    let startIndex = 1;
    let lastIndex = array.length;
    let swapsCount = 0;
    do {
        changeStatus = false;
        for (let i = startIndex; i < lastIndex; i++) {
            if (array[i - 1] > array[i]) {
                const temp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temp;
                changeStatus = true;
                swapsCount++;
            }
        }
        lastIndex--;
        if (changeStatus === false)
            break;
        changeStatus = false;
        for (let i = lastIndex; i >= startIndex; i--) {
            if (array[i - 1] > array[i]) {
                const temp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temp;
                changeStatus = true;
                swapsCount++;
            }
        }
        startIndex++;
    } while (changeStatus);
    return [array, swapsCount];
}
const [array, swapsCount] = shakerSort(randomNumsArray);
document.write(`Масив: ${array.join(", ")} <br>`);
document.write("<br>");
document.write(`Кількість обмінів: ${swapsCount}`);
