// Задача 5: Інвестор вклав  N тис. грн на 20 років під 20% річних. Визначити за допомогою циклів суму, яку він одержить (без оподаткування).

// Розв'язок та вивід на сторінку
if (confirm("Почати тестування?")) {
	// Введення данних
	let userDeposit = parseFloat(prompt("Будь ласка вкажіть кількість грошей, яку ви вклали (тис. грн)")!) * 1000 
	const numberOfYears = 20
	const percentsPerYear = 20 
	let result = "" 

	//  Обчислення
	for (let i = 1; i <= numberOfYears; i++) {
		//сума грошей за 20 років
		userDeposit += (userDeposit * percentsPerYear) / 100 
		//сума грошей за кожний рік на протязі 20 років
		result += `${i}:  ${userDeposit.toFixed(2)} грн <br> ` 
	}

	// Вивід на сторінку
	document.write(`
							<div class="solution__list list ">
								<div class="list__item">
									<h2 class="list__title">Результати:</h2>
									<p class="list__result-text">Сума за ${numberOfYears} років: <span>${userDeposit.toFixed(2)} грн</span></p>	
									<p>За кожний рік: </p>
									${result} 
								</div>
							</div>
						`)
}
