// Задача 1: Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою

// Розв'язок та вивід на сторінку

// Масив з 30 елементів від 1 до 10000
const randomNumbersArray = Array.from({ length: 30 }, () => 1 + Math.floor(Math.random() * 10000))

function bubbleSort(arr: number[]):[number[], number] {
	let changeStatus:boolean
	let lastIndex:number = arr.length
	let swapCount:number = 0 
	do {
		changeStatus = false
		for (let i = 1; i < lastIndex; i++) {
			if (arr[i - 1] > arr[i]) {
				const temp = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = temp
				changeStatus = true
				swapCount++
			}
		}
		lastIndex--
	} while (changeStatus)
	return [arr, swapCount]
}
const [arr, swapCount] = bubbleSort(randomNumbersArray)
document.write(`Масив: ${arr.join(", ")} <br>`)
document.write('<br>')
document.write(`Кількість обмінів: ${swapCount}`)
