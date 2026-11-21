"use strict";
// Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// 			1) загальний прибуток кожного масиву за тиждень;
// 			2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
// 			3) загальний прибуток за робочі дні
// 			4) загальний прибуток за вихідні дні
// 			5) максимальний прибуток за середу
// 			6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
// 			7) відсортувати кожен тиждень за зростанням
// 			8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
// 			9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// Генеруємо двовимірний масив, який заповнений випадковими значеннями
function getRandomNumbers(minValue, maxValue) {
    return minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
}
function getTable(rowsNum, colsNumber, minValue, maxValue) {
    return Array.from({ length: rowsNum }, () => // окремий магазин
     Array.from({ length: colsNumber }, () => // день тижня
     getRandomNumbers(minValue, maxValue)));
}
const shopsTable = getTable(10, 7, 1000, 9999);
// Вивід масиву на сторінку
for (let i = 0; i < shopsTable.length; i++) {
    document.write(`Магазин ${i + 1}: ${shopsTable[i].join(", ")} <br>`);
}
document.write(`<br>`);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// 1) загальний прибуток кожного масиву за тиждень;
document.write(`1) загальний прибуток кожного масиву за тиждень: </br>`);
// Рішення а допомогою for
for (let i = 0; i < shopsTable.length; i++) {
    const shopWeekSum = shopsTable[i].reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    document.write(`Магазин: ${i + 1}: ${shopWeekSum} </br>`);
}
// Рішення а допомогою for...of
// let shopNum = 1 
// for (const shop of shopsTable) {
// 	const shopWeekSum = shop.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
// 	document.write(`Магазин: ${shopNum}: ${shopWeekSum} </br>`)
// 	shopNum++
// }
// Рішення а допомогою forEach
// shopsTable.forEach((shop, index) => {
//    const shopWeekSum = shop.reduce(
//       (previousValue, currentValue) => previousValue + currentValue,
//       0
//    )
//    document.write(`Магазин ${index + 1}: ${shopWeekSum} <br>`)
// })
document.write('</br>');
// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
document.write('2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.)</br>');
for (let day = 0; day < shopsTable[0].length; day++) { //дні
    let daySum = 0;
    for (const shop of shopsTable) { //магазини
        daySum += shop[day];
    }
    document.write(`Прибуток всіх магазинів за день ${day + 1}: ${daySum} <br>`);
}
// Рішення за допомогую reduce
// for (let day = 0; day < shopsTable[0].length; day++) {
// 		const shopWeekSum = shopsTable.reduce((previousValue, currentValue) => previousValue + currentValue[day], 0)
// 		document.write(`Прибуток всіх магазинів за день ${day+1}: ${shopWeekSum} <br>`)
// }
document.write('</br>');
// 3) загальний прибуток за робочі дні
document.write('3) загальний прибуток за робочі дні</br>');
for (let shop = 0; shop < shopsTable.length; shop++) {
    let sumMoneyPerWorkDays = 0;
    for (let day = 0; day < 5; day++) {
        sumMoneyPerWorkDays += shopsTable[shop][day];
    }
    document.write(`Загальний прибуток магазину ${shop + 1} за робочі дні: ${sumMoneyPerWorkDays} <br>`);
}
document.write('</br>');
// 4) загальний прибуток за вихідні дні
document.write('4) загальний прибуток за вихідні дні</br>');
for (let shop = 0; shop < shopsTable.length; shop++) {
    let sumMoneyPerWeekend = 0;
    for (let day = 5; day <= 6; day++) {
        sumMoneyPerWeekend += shopsTable[shop][day];
    }
    document.write(`Загальний прибуток магазину ${shop + 1} за вихідні дні: ${sumMoneyPerWeekend} <br>`);
}
document.write('</br>');
// 5) максимальний прибуток за середу
let maxWednesdayValue = 0;
document.write('5) максимальний прибуток за середу</br>');
for (let shop = 0; shop < shopsTable.length; shop++) {
    if (maxWednesdayValue < shopsTable[shop][2]) {
        maxWednesdayValue = shopsTable[shop][2];
    }
}
document.write(`Максимальний прибуток за середу: ${maxWednesdayValue} </br>`);
document.write('</br>');
// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
document.write(`6) Cформувати загальний список (одновимірний масив) зі значенням, які що більші за 200 <br>`);
let valuesMoreThan200 = [];
for (const shop of shopsTable) {
    for (const dayValue of shop) {
        if (dayValue > 200) {
            valuesMoreThan200.push(dayValue);
        }
    }
}
document.write(`Загальний список (одновимірний масив) зі значенням, які що більші за 200: ${valuesMoreThan200.join(', ')}`);
document.write('</br>');
document.write('</br>');
// 7) відсортувати кожен тиждень за зростанням
document.write(`7) Відсортувати кожен тиждень за зростанням <br>`);
let shopNumber = 1;
for (const shop of shopsTable) {
    shop.sort((a, b) => a - b);
    document.write(`Магазин ${shopNumber}: ${shop} <br>`);
    shopNumber++;
}
document.write('</br>');
// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
document.write(`8) Відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків <br>`);
// Тут потрібно відсорторувати магазини по максимальному значенню за тиждень
// У цьому варіанті створюється новий масив, але в умові задачі було сказано просто відсортовати дані у вже існуючому масиві, тому це рішення не підходить.
// const maxValuesArray:number[] = []
// for (const shop of shopsTable) {
// 	const maxValues = Math.max(...shop)
// 	maxValuesArray.push(maxValues)
// 	maxValuesArray.sort((a, b) => b - a)
// }
// document.write(`Відсортувати кожен тиждень за спаданням ${maxValuesArray}<br>`)
// У цьому варіанті здається що сортування відповідає умові завдання, але я не розібрався як коректно вивести ще і номери магазинів, щоб вони виводилися відовідно до своїх відповідних максимальних значень.
shopsTable.sort((a, b) => {
    const maxA = Math.max(...a);
    const maxB = Math.max(...b);
    return maxB - maxA;
});
// Вивід максимальних значень в порядку спадання.
for (let i = 0; i < shopsTable.length; i++) {
    document.write(`${shopsTable[i]} <br>`);
    document.write(`(${Math.max(...shopsTable[i])}) <br>`);
}
// Розв'язок з уроку (просто я зробив цю задачу ще до уроку, тому залишив своє рішення): 
// shopsTable.forEach((row) => row.push(Math.max(...row)))
// shopsTable.sort((row1:number[], row2:number[]) => row1.at(-1)! - row2.at(-1)!)
// shopsTable.forEach((row) => row.pop())
document.write(`<br>`);
// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
document.write(`9) Упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше). <br>`);
// Тут потрібно відсорторувати по сумі всіх значень для кожного магазину
// Cортування
shopsTable.sort((a, b) => {
    const sumA = a.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    const sumB = b.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    return sumB - sumA;
});
let shopNumb = 1;
// Вивід на сторінку (тут я також не розібрався як коректно вивести ще і номери магазинів, щоб вони виводилися відовідно до своїх відповідних значень)
for (const shop of shopsTable) {
    const shopSum = shop.reduce((sum, currentValue) => sum + currentValue, 0);
    document.write(`${shop.join(", ")} - Сумма: ${shopSum} <br>`);
    shopNumb++;
}
