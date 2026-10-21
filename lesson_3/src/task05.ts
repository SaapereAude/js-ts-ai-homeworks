// Задача 5: З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

//1. Введення даних:
let driverCategory = prompt('Будь ласка, введіть назву вашої категорії (латинськими літерами у верхньому регістрі):');
const categoryA = 'A';
const categoryB = 'B'; 
const categoryC = 'C'; 
let category

//2.Розв'язок 
switch (driverCategory) {
	case categoryA:
		category = 'мотоциклами'
		break;
	case categoryB:				
		category = 'легковими автомобілями'
		break;
	case categoryC:
		category = 'вантажними автомобілями'
		break;
	default: category = 'Введіть корректне значеняв'
}
