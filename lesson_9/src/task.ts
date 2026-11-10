const userNum:number = parseInt(prompt("Введіть кількість елементів масиву")!)

// 1. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.
const firstTaskArray:number[] = new Array(userNum).fill(0)

// 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
const secondTaskArray:number[] = new Array(userNum).fill(1, 0, userNum / 2).fill(7, userNum / 2)

// 3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
const thirdTaskArray:number[] = new Array(userNum).fill(1, 0, 5).fill(7, 5)

// ----------   Тут використати цикл for..of  -----------
const numList:number[] = [232, 343, 43, -4545, -989, 452, -3523, 4, 394, 124]
const fourthTaskArray:number[] = []

// 4.Дано масив елементів. Вивести на екран елементи, що більші за 100
for (const el of numList) {
	if (el > 100) fourthTaskArray.push(el)
}

// 5.Дано масив елементів. Знайти добуток додатних елементів
let mult:number = 1
for (let el of numList) {
	if (el > 0) {
		mult *= el
	}
}

//======= Тут використовуйте, що хочете для розв’язання (але бажано використовувати спеціальні методи масивів)==================
// 6.Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
const numList2:number[] = [232, 343, 43, -4545, -989, 452, -3523, 4, 394, 124]
numList2.forEach((el, index, numList2) => {
	if (el > numList2[0]) numList2[index] *= 2
})

// 7.Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.
const prices:number[] = [232, 4545, 343, 43, 452, 4, 394, 124]
prices.forEach((el, i, prices) => {
	if(el > 1000) prices[i] -= el * 0.3
});

// 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»
const licensePlateNumbers:string[] = ["AA84342BH", "B234FG", "A4325JH", "HJ534VF", "WR76JK", "AA34534HK"]
const aLetterArray: string[] = []

licensePlateNumbers.forEach(el => {
	if(el[0] === "A") aLetterArray.push(el)
});

// 9. Дано масив імен. Сформувати масив з перших літер цих імен.
const namesArray: string[] = ["Lisa", "Bob", "John", "Olga", "Andrew", "Ivan"]
let firstLetterArray: string[] = namesArray.map((name) => {
	return name[0]
})

// 10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.
const pricesArray:number[] = [232, 4545, 343, 43, 452, 4, 394, 124]
const taxPercent:number = 0.2 
let taxValue:number[] = pricesArray.map((price) => {
	return price * taxPercent
})


// Вивід на сторінку
document.write(`
					<div class="solution__list list ">
						<div class="list__item">
							<h2 class="list__title">Результати:</h2>
							<p class="list__result-text">Кількість елементів (для задач 1-3): <span>${userNum}</span> </p>
							<p class="list__result-text">Задача 1. Масив: <span>${firstTaskArray}</span></p>
							<p class="list__result-text">Задача 2. Масив: <span>${secondTaskArray}</span></p>
							<p class="list__result-text">Задача 3. Масив: <span>${thirdTaskArray}</span></p>
							<p class="list__result-text">Масив для задач 4-5 (а також початковий масив для задач 6-7): <span>${numList}</span> </p>
							<p class="list__result-text">Задача 4. Масив: <span>${fourthTaskArray}</span></p>
							<p class="list__result-text">Задача 5. Добуток додатних елементів: <span>${mult}</span></p>
							<p class="list__result-text">Задача 6. <span>${numList2}</span></p>
							<p class="list__result-text">Задача 7: <span>${prices}</span></p>
							<p class="list__result-text">Задача 8. Початковий масив номерів: <span>${licensePlateNumbers}</span></p>
							<p class="list__result-text">Задача 8. Масив номерів з першою літерою А: <span>${aLetterArray}</span></p>
							<p class="list__result-text">Задача 9. Масив імен: <span>${namesArray}</span></p>
							<p class="list__result-text">Задача 9. Масив із перших літер імен: <span>${firstLetterArray}</span></p>
							<p class="list__result-text">Задача 10. Масив цін: <span>${pricesArray}</span></p>
							<p class="list__result-text">Задача 10. Масив величин сплаченого податку: <span>${taxValue.map((value) => value.toFixed(2))}</span></p>
						</div>
					</div>
				`)
