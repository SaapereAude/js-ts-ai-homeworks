// Задача 6: Інвестор вклав  N тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку. Визначити за допомогою циклів суму, яку він одержить.

// Розв'язок та вивід на сторінку
if (confirm("Почати тестування?")) {
	// Введення данних
	let userDeposit =	parseFloat(prompt("Введіть кількість грошей, яку ви вклали (тис. грн)")!) * 1000 
	let depositWithTax: number = userDeposit 

	const numberOfYears = 20
	const percentsPerYear = 20
	const tax = 5

	let resultWithoutTax: string = ""
	let resultWithTax: string = ""

	//  Обчислення
	for (let i = 1; i <= numberOfYears; i++) {
		// накопичена сума вкладу без урахування податку
		userDeposit += (userDeposit * percentsPerYear) / 100

		// накопичена сума вкладу з податком 5%
		let profit = (depositWithTax * percentsPerYear) / 100 //прибуток за рік
		let taxAmount = (profit * tax) / 100 //податок від річного прибутку
		depositWithTax += profit - taxAmount //прибуток за рік враховуючи податок

		// накопичення без оподаткування
		resultWithoutTax += `${i}:  ${userDeposit.toFixed(2)} грн <br> `
		// накопичення з урахуванням податку 5%
		resultWithTax += `${i}: ${depositWithTax.toFixed(2)} грн <br>`
	}

	// Вивід на сторінку
	document.write(`
							<div class="solution__list list ">
								<div class="list__item">
									<h2 class="list__title">Результати:</h2>
									<p class="list__result-text">
										Сума за ${numberOfYears} років без податку: <span>${userDeposit.toFixed(2)} грн</span>
									</p>
									<p class="list__result-text">
										Сума за ${numberOfYears} років з податком 5% від прибутку: <span>${depositWithTax.toFixed(2)} грн</span>
									</p>
									<p>За кожний рік (без податку): </p>
									${resultWithoutTax}
									<p>За кожний рік (з урахуванням податку 5%): </p>
									${resultWithTax}
								</div>
							</div>
						`)
}
