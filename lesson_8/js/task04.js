"use strict";
// Задача 4: Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// 1) починаються на букву «А» (для отримання першої літери можна також звернутися до номера авто як string ніби як до масиву за номером 0 - autoNum[0]-перша літера);
// 2) перша і остання літери співпадають; 
// 3) складаються з більше ніш 5 символів;
// Розв'язок та вивід на сторінку
const quantityOfCarLicensePlates = parseInt(prompt("Будь ласка введіть кількість автомобільних номерів:")); // кількість автомобільних номерів
let licensePlateNumbersArray = getLicensePlateNumbersArray(quantityOfCarLicensePlates);
let carsWithStartLetterA = getPlatesWithStartLetterA(licensePlateNumbersArray);
let platesWithMatchingFirstAndLastLetters = getPlatesWithMatchingFirstAndLastLetters(licensePlateNumbersArray);
let platesWithSymbolsMoreThanFive = getPlatesWithSymbolsMoreThanFive(licensePlateNumbersArray);
// функція для побудови масиву з автомобільними номерами
function getLicensePlateNumbersArray(quantityOfCarLicensePlates) {
    let licensePlateNumbers = [];
    for (let i = 0; i < quantityOfCarLicensePlates; i++) {
        let userPlateNumbers = prompt(`Будь ласка введіть автомобільний номер №${i + 1}:`).toUpperCase();
        licensePlateNumbers.push(userPlateNumbers);
    }
    return licensePlateNumbers;
}
//функція для знаходження кількості автомобільних номерів, які починаються на букву "А"
function getPlatesWithStartLetterA(licensePlateNumbers) {
    let startLetterACounter = 0;
    for (let i = 0; i < licensePlateNumbers.length; i++) {
        if (licensePlateNumbers[i][0] === "A")
            startLetterACounter++;
    }
    return startLetterACounter;
}
//функція для знаходження кількості автомобільних номерів, у яких співпадають перша і остання літери
function getPlatesWithMatchingFirstAndLastLetters(licensePlateNumbers) {
    let matchingLetterCounter = 0;
    for (let i = 0; i < licensePlateNumbers.length; i++) {
        if (licensePlateNumbers[i][0] === licensePlateNumbers[i][licensePlateNumbers[i].length - 1])
            matchingLetterCounter++;
    }
    return matchingLetterCounter;
}
//функція для знаходження кількості автомобільних номерів, які складаються з більше ніш 5 символів
function getPlatesWithSymbolsMoreThanFive(licensePlateNumbers) {
    let symbolsMoreThanFiveCounter = 0;
    for (let i = 0; i < licensePlateNumbers.length; i++) {
        if (licensePlateNumbers[i].length > 5)
            symbolsMoreThanFiveCounter++;
    }
    return symbolsMoreThanFiveCounter;
}
document.write(`
							<div class="solution__list list ">
								<div class="list__item">
									<h2 class="list__title">Результати:</h2>
									<p class="list__result-text">Номери, які ви ввели: <span>${licensePlateNumbersArray}</span> </p>
									<p class="list__result-text">Кількість номерів, які починаються на букву «А»: <span>${carsWithStartLetterA}</span></p>
									<p class="list__result-text">Кількість номерів, у яких перша і остання літери співпадають: <span>${platesWithMatchingFirstAndLastLetters}</span></p>
									<p class="list__result-text">Кількість номерів, які складаються з більше ніш 5 символів: <span>${platesWithSymbolsMoreThanFive}</span></p>
								</div>
							</div>
						`);
