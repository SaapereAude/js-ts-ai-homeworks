"use strict";
// Задача 2: Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// 1) номери днів, протягом яких кількість відвідувачів була меншою за 20;
// 2) номери днів, коли кількість відвідувачів була мінімальною;
// 3) номери днів, коли кількість відвідувачів була максимальною;
// 4) загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// Варіант 1 - рішення розбито на декілька функцій для кожної операції
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// Розв'язок та вивід на сторінку
/*
const visitorsArr = getVisitorsArr() //Отримуємо масив у змінну
const visitorsLessThanTwenty = getVisitorsLessThanTwenty(visitorsArr) //номери днів, протягом яких кількість відвідувачів була меншою за 20
const minimumVisitors = getMinimumVisitors(visitorsArr) //номери днів, коли кількість відвідувачів була мінімальною
const maximumVisitors = getMaximumVisitors(visitorsArr) //номери днів, коли кількість відвідувачів була максимальною
const visitorsOnWorkDays = getVisitorsOnWorkDays(visitorsArr) //загальна кількість клієнтів у робочі дні
const visitorsOnWeekends = getVisitorsOnWeekends(visitorsArr) //загальна кількість клієнтів у вихідні

//Функція для введення елементів масиву
function getVisitorsArr():number[] {
    let visitors = []
    for (let i = 0; i < 7; i++) {
        let visitorsPerDay = parseInt(prompt(`Будь ласка введіть кількість людей за день № ${i + 1}:`)!)
        visitors.push(visitorsPerDay)
    }
    return visitors
}

//Функція для знаходження номерів днів, протягом яких кількість відвідувачів була меншою за 20
function getVisitorsLessThanTwenty(visitorsArr: number[]): number[] {
    let numberOfDaysWithLessThanTwentyVisitors = []
    for (let i = 0; i < visitorsArr.length; i++) {
        if (visitorsArr[i] < 20) numberOfDaysWithLessThanTwentyVisitors.push(i + 1)
    }
    return numberOfDaysWithLessThanTwentyVisitors
}

//Функція для знаходження номерів днів, коли кількість відвідувачів була мінімальною
function getMinimumVisitors(visitorsArr: number[]): number[] {
    let minimumVisitors = visitorsArr[0]
    let minimumVisitorDays: number[] = []
    for (let i = 0; i < visitorsArr.length; i++) {
        if (minimumVisitors > visitorsArr[i]) {
            minimumVisitors = visitorsArr[i]
            minimumVisitorDays = [i + 1]
        } else if (minimumVisitors === visitorsArr[i]) minimumVisitorDays.push(i + 1)
    }
    return minimumVisitorDays
}

//Функція для знаходження номерів днів, коли кількість відвідувачів була максимальною
function getMaximumVisitors(visitorsArr: number[]): number[] {
    let maximumVisitors = visitorsArr[0]
    let maximumVisitorDays:number[] = []
    for (let i = 0; i < visitorsArr.length; i++) {
        if (maximumVisitors < visitorsArr[i]) {
            maximumVisitors = visitorsArr[i]
            maximumVisitorDays = [i + 1]
        } else if (maximumVisitors === visitorsArr[i]) maximumVisitorDays.push(i + 1)
    }
    return maximumVisitorDays
}

//Функція для знаходження загальної кількості клієнтів у робочі дні
function getVisitorsOnWorkDays(visitorsArr: number[]): number {
    let totalVisitors = 0
    for (let i = 0; i < 5; i++) {
        totalVisitors += visitorsArr[i]
    }
    return totalVisitors
}

//Функція для знаходження загальної кількості клієнтів у вихідні дні
function getVisitorsOnWeekends(visitorsArr: number[]): number {
    let totalVisitors = 0
    for (let i = 5; i < 7; i++) {
        totalVisitors += visitorsArr[i]
    }
    return totalVisitors
}

document.write(`
                            <div class="solution__list list ">
                                <div class="list__item">
                                    <h2 class="list__title">Результати:</h2>
                                    <p class="list__result-text">Номери днів, протягом яких кількість відвідувачів була меншою за 20: <span>${visitorsLessThanTwenty}</span> </p>
                                    <p class="list__result-text">Номери днів, коли кількість відвідувачів була мінімальною: <span>${minimumVisitors}</span></p>
                                    <p class="list__result-text">Номери днів, коли кількість відвідувачів була максимальною: <span>${maximumVisitors}</span></p>
                                    <p class="list__result-text">Загальна кількість клієнтів у робочі дні: <span>${visitorsOnWorkDays}</span></p>
                                    <p class="list__result-text">Загальну кількість клієнтів на вихідних: <span>${visitorsOnWeekends}</span></p>
                                </div>
                            </div>
                        `)
*/
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// Варіант 2 - рішення розбито на дві функції: функцію для введення масиву і функцію обчислення результатів - універсальна функція, 1 цикл замість 5
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
const visitorsArr = getVisitorsArr(); //Отримуємо масив у змінну
const results = getVisitorDaysAmount(visitorsArr);
//Функція для введення елементів масиву
function getVisitorsArr() {
    let visitors = [];
    for (let i = 0; i < 7; i++) {
        let visitorsPerDay = parseInt(prompt(`Будь ласка введіть кількість людей за день № ${i + 1}:`));
        visitors.push(visitorsPerDay);
    }
    return visitors;
}
function getVisitorDaysAmount(visitorsArray, startIndex = 0, endIndex = visitorsArray.length) {
    const numberOfDaysWithLessThanTwentyVisitors = [];
    let minimumVisitorDays = [];
    let minimumVisitors = visitorsArray[startIndex];
    let maximumVisitors = visitorsArray[startIndex];
    let maximumVisitorDays = [];
    let visitorsOnWeekDays = 0;
    let visitorsOnWeekend = 0;
    for (let i = startIndex; i < endIndex; i++) {
        //знаходження номерів днів, протягом яких кількість відвідувачів була меншою за 20
        if (visitorsArray[i] < 20)
            numberOfDaysWithLessThanTwentyVisitors.push(i + 1);
        // знаходження номерів днів, коли кількість відвідувачів була мінімальною
        if (minimumVisitors > visitorsArray[i]) {
            minimumVisitors = visitorsArray[i];
            minimumVisitorDays = [i + 1];
        }
        else if (minimumVisitors === visitorsArray[i])
            minimumVisitorDays.push(i + 1);
        // знаходження номерів днів, коли кількість відвідувачів була максимальною
        if (maximumVisitors < visitorsArray[i]) {
            maximumVisitors = visitorsArray[i];
            maximumVisitorDays = [i + 1];
        }
        else if (maximumVisitors === visitorsArray[i])
            maximumVisitorDays.push(i + 1);
        if (i < 5) {
            visitorsOnWeekDays += visitorsArray[i]; // знаходження загальної кількості клієнтів у робочі дні
        }
        else {
            visitorsOnWeekend += visitorsArray[i]; // знаходження загальної кількості клієнтів у вихідні дні
        }
    }
    return [
        numberOfDaysWithLessThanTwentyVisitors,
        minimumVisitorDays,
        maximumVisitorDays,
        visitorsOnWeekDays,
        visitorsOnWeekend,
    ];
}
document.write(`
					<div class="solution__list list ">
						<div class="list__item">
							<h2 class="list__title">Результати:</h2>
							<p class="list__result-text">Масив: <span>${visitorsArr}</span> </p>
							<p class="list__result-text">Номери днів, протягом яких кількість відвідувачів була меншою за 20: <span>${results[0]}</span> </p>
							<p class="list__result-text">Номери днів, коли кількість відвідувачів була мінімальною: <span>${results[1]}</span></p>
							<p class="list__result-text">Номери днів, коли кількість відвідувачів була максимальною: <span>${results[2]}</span></p>
							<p class="list__result-text">Загальна кількість клієнтів у робочі дні: <span>${results[3]}</span></p>
							<p class="list__result-text">Загальну кількість клієнтів на вихідних: <span>${results[4]}</span></p>
						</div>
					</div>
				`);
