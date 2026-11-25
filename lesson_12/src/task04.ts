// // Задача 4: Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.
// // Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран.

if (confirm("Почати тестування?")) {

	// Масив із завдання
	let arrayForBubbleSort = [3, 5, 1, 4, 2]

	// Функція виводу початкового масиву на сторінку
	function printInitialArray(array:number[]){
		document.write(`<table class="table">`)
			document.write(`<caption>Початковий масив </caption>`)

			// Виводимо індекси елементів
			document.write(`<tr class="table__row">`)
				for (let i = 0; i < array.length; i++) {
					document.write(`<th>${i}</th>`)
				}
			document.write(`</tr>`)
			
			// Виводимо значення масиву
			document.write(`<tr class="table__row">`)
				for (let i = 0; i < array.length; i++) {
					document.write(`<td class="table__value">${array[i]}</td>`)
				}
			document.write(`</tr>`)

		document.write(`</table>`)
	}
	// Виводимо початковий масив на сторінку
	printInitialArray(arrayForBubbleSort)

	// Функція виводу поточного стану масиву. Ми будемо викликати її після кожного обміну
	function printArray(arr: number[], index1: number, index2: number, step: number) {
		document.write(`<table class="table">`)

			// Выводимо номер етапу
			document.write(`<caption>Крок ${step}</caption>`)

			// Виводимо індекси елементів
			document.write(`<tr>`)
				for (let i = 0; i < arr.length; i++) {
					document.write(`<th>${i}</th>`)
				}
			document.write(`</tr>`)

			// Виводимо значення масиву
			document.write(`<tr class="table__row">`)
				for (let i = 0; i < arr.length; i++) {
					if (i === index1 || i === index2) {
						document.write(`<td class="table__value table__value--red">${arr[i]}</td>`)
					} else {
						document.write(`<td class="table__value">${arr[i]}</td>`)
					}
				}
			document.write(`</tr>`)

		document.write(`</table>`)
	}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// ------------------------------------------------------ Сортування бульбашкою ------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
	// Функція сортування бульбашкою Bubble Sort
	function bubbleSort(arr: number[]): number[] {
		let changeStatus: boolean
		let lastIndex: number = arr.length
		let swapCount: number = 0
		do {
			changeStatus = false
			for (let i = 1; i < lastIndex; i++) {
				if (arr[i - 1] > arr[i]) {
					const temp = arr[i - 1]
					arr[i - 1] = arr[i]
					arr[i] = temp
					changeStatus = true
					swapCount++
					// Виводимо поточний стан масиву
					printArray(arr, i - 1, i, swapCount)
				}
			}
			lastIndex--
		} while (changeStatus)
		return arr
	}
	// Виклик функції bubbleSort
	document.write(`<h3 class="sort-header">Сортування бульбашкою</h3>`)
	bubbleSort(arrayForBubbleSort)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// ------------------------------------------------------ Шейкерне сортування------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
	// Функція шейкерного сортування 
	function shakerSort(array: number[]): number[] {
		let changeStatus: boolean
		let startIndex: number = 1
		let lastIndex: number = array.length
		let swapsCount: number = 0
		do {
			changeStatus = false
			for (let i = startIndex; i < lastIndex; i++) {
				if (array[i - 1] > array[i]) {
					const temp = array[i - 1]
					array[i - 1] = array[i]
					array[i] = temp
					changeStatus = true
					swapsCount++
					// Виводимо поточний стан масиву
					printArray(array, i - 1, i, swapsCount)
				}
			}
			lastIndex--
			if(changeStatus === false) break

			changeStatus = false
			for (let i = lastIndex; i >= startIndex; i--) {
				if (array[i - 1] > array[i]){
					const temp = array[i - 1]
					array[i - 1] = array[i]
					array[i] = temp
					changeStatus = true
					swapsCount++
					// Виводимо поточний стан масиву
					printArray(array, i, i - 1, swapsCount)
				}
			}
			startIndex++
		} while (changeStatus)
		return array
	}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
	// Виводимо початковий масив на сторінку
	document.write(`<h3 class="sort-header">Шейкерне сортування</h3>`)
	let arrayForShakerSort = [3, 5, 1, 4, 2]
	printInitialArray(arrayForShakerSort)

	// Виклик функції shakerSort
	shakerSort(arrayForShakerSort)

}
