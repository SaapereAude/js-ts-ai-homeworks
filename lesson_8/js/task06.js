"use strict";
// Задача 6: Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі
// дозволити користувач (кількість грошей задається).
// Приклад збереження даних: let productsPrices = [1000, 20, 31]; let productsTitles = [‘cheese’, ‘juice’, ‘bread’]
// Розв'язок та вивід на сторінку
const productsPrices = [1000, 20, 31, 150, 500];
const productsTitles = ["cheese", "juice", "bread", "milk", "beer"];
const userMoney = parseFloat(prompt("Скільки грошей є в наявності?"));
function getAffordProductsList(prices, titles, money) {
    let result = "";
    for (let i = 0; i < prices.length; i++) {
        if (money >= prices[i]) {
            result += `<span>${titles[i]} — ${prices[i]} грн, </span>`;
        }
    }
    return result;
}
document.write(getAffordProductsList(productsPrices, productsTitles, userMoney));
