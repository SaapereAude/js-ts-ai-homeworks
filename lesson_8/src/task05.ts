// Задача 5: Дано послідовність оцінок учня. Підрахувати кількість:
// 1) двійок;
// 2) кількість хороших оцінок (добре, відмінно);
// 3) кількість оцінок, які нижче середнього

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// Варіант 1 - рішення розбито на декілька функцій для кожної операції
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

/*
// Розв'язок та вивід на сторінку
const gradesQuantity:number = parseInt(prompt("Будь ласка введіть кількість оцінок:")!) // кількість оцінок
const studentGrades:number[] = getGradesArray(gradesQuantity) //Отримуємо масив у змінну

const badGradesQuantity = getBadGradesQuantity(studentGrades)
const goodGradesQuantity = getGoodGradesQuantity(studentGrades)
const averageStudentsGrade = getAverageStudentsGrade(studentGrades)
const gradesBelowAverage = getGradesBelowAverage(studentGrades, averageStudentsGrade)


//Функція для введення елементів масиву
function getGradesArray(quantityOfGrades:number):number[] {
	const grades = []
	for (let i = 0; i < quantityOfGrades; i++) {
		const userGrades = parseInt(prompt(`Будь ласка введіть оцінку: ${i + 1}`)!)
		grades.push(userGrades)
	}
	return grades
}

// Функція для підрахування кількості двійок
function getBadGradesQuantity(studentsGrades:number[]):number {
	let badGrades = 0
	for (let i = 0; i < studentsGrades.length; i++) {
		if (studentsGrades[i] === 2) badGrades++
	}
	return badGrades
}

// Функція для підрахування хороших оцінок (добре, відмінно); 
function getGoodGradesQuantity(studentsGrades:number[]):number {
	let goodGrades = 0
	for (let i = 0; i < studentsGrades.length; i++) {
		if (studentsGrades[i] >= 7) goodGrades++
	}
	return goodGrades
}

// Функція для підрахування cережнького баллу учня 
function getAverageStudentsGrade(studentGrades:number[]):number {
	let sumGrades = 0 
	for (let i = 0; i < studentGrades.length; i++) {
		sumGrades += studentGrades[i]
	}
	return sumGrades / studentGrades.length
}

// Функція для підрахування оцінок, які нижче середнього баллу
function getGradesBelowAverage(studentsGrades:number[], averageGrade:number):number {
	let gradesBelowAverage = 0
	for (let i = 0; i < studentsGrades.length; i++) {
		if (studentsGrades[i] < averageGrade) gradesBelowAverage++
	}
	return gradesBelowAverage
}

document.write(`
					<div class="solution__list list ">
						<div class="list__item">
							<h2 class="list__title">Результати:</h2>
							<p class="list__result-text">Оцінки які ви ввели: <span>${studentGrades}</span> </p>
							<p class="list__result-text">Кількість двійок: <span>${badGradesQuantity}</span></p>
							<p class="list__result-text">Кількість хороших оцінок (добре, відмінно): <span>${goodGradesQuantity}</span></p>
							<p class="list__result-text">Кількість оцінок, які нижче середнього балу: <span>${gradesBelowAverage}</span></p>
						</div>
					</div>
				`)
*/

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// Варіант 2 - рішення розбито на дві функції: функцію для введення масиву і функцію обчислення результатів
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// Розв'язок та вивід на сторінку
const gradesQuantity: number = parseInt(prompt("Будь ласка введіть кількість оцінок:")!) // кількість оцінок
const studentGrades: number[] = getGradesArray(gradesQuantity) //Отримуємо масив у змінну
const gradeResults = getGradeResults(studentGrades)

//Функція для введення елементів масиву
function getGradesArray(quantityOfGrades: number): number[] {
	const grades = []
	for (let i = 0; i < quantityOfGrades; i++) {
		const userGrades = parseInt(prompt(`Будь ласка введіть оцінку: ${i + 1}`)!)
		grades.push(userGrades)
	}
	return grades
}
//Функція для обчислення результатів
function getGradeResults(studentsGrades: number[]): number[] {
	let badGrades = 0 // погані оцінки (двійки)
	let goodGrades = 0 // хороші оцінки (добре, відмінно)
	let sumGrades = 0 // сума оцінок (потрібна для визначення серднього баллу)
	let gradesBelowAverage = 0 // кількість оцінок, які нижче середнього балу

	for (let i = 0; i < studentsGrades.length; i++) {
		if (studentsGrades[i] === 2) badGrades++ // погані оцінки (двійки)
		if (studentsGrades[i] >= 7) goodGrades++ // хороші оцінки (добре, відмінно)
		sumGrades += studentsGrades[i] // сума оцінок 
	}
	
	const averageGrade = sumGrades / studentsGrades.length // середній бал учня
	
	for (let i = 0; i < studentsGrades.length; i++) {
		if (studentsGrades[i] < averageGrade) gradesBelowAverage++ // кількість оцінок, які нижче середнього балу
	}

	return [badGrades, goodGrades, averageGrade, gradesBelowAverage]
}


document.write(`
					<div class="solution__list list ">
						<div class="list__item">
							<h2 class="list__title">Результати:</h2>
							<p class="list__result-text">Оцінки які ви ввели: <span>${studentGrades}</span> </p>
							<p class="list__result-text">Кількість двійок: <span>${gradeResults[0]}</span></p>
							<p class="list__result-text">Кількість хороших оцінок (добре, відмінно): <span>${gradeResults[1]}</span></p>
							<p class="list__result-text">Середній бал: <span>${gradeResults[2]}</span></p>
							<p class="list__result-text">Кількість оцінок, які нижче середнього балу: <span>${gradeResults[3]}</span></p>
						</div>
					</div>
				`)
