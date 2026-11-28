// Задача 7: Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.

//  Рішення через setInterval
function checkSum():void {
	const numOne:number = 1 + Math.floor(Math.random() * 100)
	const numTwo:number = 1 + Math.floor(Math.random() * 100)
	const correctAnswer:number = numOne + numTwo
	const userAnswer:number = parseInt(prompt(`${numOne} + ${numTwo} = `)!)
	if(userAnswer === correctAnswer) document.write(`Правильно! Сума: ${correctAnswer}<br>`)
		else document.write(`Неправильно! Ваша відповідь: ${userAnswer}. Правильна відповідь: ${correctAnswer}<br>`)
}

setInterval(checkSum, 10000);

// Рішення через setTimeout (щоб між відповідями користувача була затримка 10с, а не між виводом повідомлень з прикладами)
// function checkSum():void {
// 	const numOne:number = 1 + Math.floor(Math.random() * 100)
// 	const numTwo:number = 1 + Math.floor(Math.random() * 100)
// 	const correctAnswer:number = numOne + numTwo
// 	const userAnswer:number = parseInt(prompt(`${numOne} + ${numTwo} = `)!)
// 	if(userAnswer === correctAnswer) document.write(`Правильно! Сума: ${correctAnswer}<br>`)
// 		else document.write(`Неправильно! Ваша відповідь: ${userAnswer}. Правильна відповідь: ${correctAnswer}<br>`)

// 	setTimeout(checkSum, 10000)
// }

// 	checkSum()
