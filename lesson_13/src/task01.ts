// Задача 1: Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву. 
// Наприклад, для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].

// Розв'язок та вивід на сторінку
const arr =  [1, 2, 3]
function generateSubset(array:number[], index:number, subset:number[] = []) {
	// Базовий випадок
	if (index === array.length) {
		document.write(`[ ${subset.join(', ')} ] <br>`)
		return
	} else { 
	// Рекурсивний виклик для елементу, який ми пропускаємо
	generateSubset(array, index + 1, subset)
	// Рекурсивний виклик для елементу, який ми додаємо
	generateSubset(array, index + 1, [...subset, array[index]])
	}
}
generateSubset(arr, 0)