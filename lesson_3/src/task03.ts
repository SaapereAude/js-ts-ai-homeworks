// Задача 3:	Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

//1. Введення даних:
const minValue = 1
const maxValue = 5
const randNumber = minValue + Math.floor(Math.random() * (maxValue - minValue + 1)!);
let userNum = parseInt(prompt('Будь ласка, введіть число від 1 до 5:', '1')!);

//2. Розв'язок та вивід на сторінку
if (userNum === randNumber) {
	alert(`Вітаю! Ви вгадали випадкове число: ${randNumber}`);
} else {
	userNum = parseInt(prompt('На жаль ви не вгадали. Будь ласка, введіть ще раз число від 1 до 5:', '1')!);
	if (userNum === randNumber) {
		alert(`Вітаю! Ви вгадали випадкове число: ${randNumber}`);
	} else {
		alert(`На жаль, ви не вгадали 2 рази. Випадкове число було: ${randNumber}`);
	}
}