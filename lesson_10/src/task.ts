// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
// Масив з цінами від 1 до 10000 за 100 днів
const pricesHistory = Array.from({ length: 100 }, () => 1 + Math.floor(Math.random() * 10000))
// console.log(pricesHistory)

//       1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
const pricesMoreThanThousand = pricesHistory.filter((price) => price > 1000)
console.log(pricesMoreThanThousand);

//       2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
const pricesMoreThanThousandIndexes = pricesHistory.map((price, index) => price > 1000 ? index : -1).filter(index => index !== -1)
console.log(pricesMoreThanThousandIndexes)

//       3)Сформувати список з тих цін, які більші за попереднє значення
const pricesMoreThanPrevious = pricesHistory.filter( (price, index, array) => index > 0 && price > array[index - 1] )
console.log(pricesMoreThanPrevious);

//       4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
const maxPrice = Math.max(...pricesHistory)
const pricesPercentToMaxPrice = pricesHistory.map((price) => (price * 100) / maxPrice)
console.log(pricesPercentToMaxPrice)

//       5)Підрахувати кількість змін цін
const countOfPriceChanges = pricesHistory.reduce((priceCount, currentPrice, index, array) => {
	if (index > 0 && currentPrice !== array[index - 1] ) {
		priceCount++
	}
	return priceCount
}, 0)
console.log(`Кількість змін цін ${countOfPriceChanges}`)

//       6)Визначити, чи є ціна, що менше 1000
console.log(
	pricesHistory.some((price) => price < 1000) ? "Є ціна, що менша за 1000" : "Немає ціни, менших за 1000",
)

//       7)Визначати, чи усі ціни більше за 1000
console.log(
	pricesHistory.every((price) => price > 1000) ? "Всі ціни більші за 1000" : "Не всі ціни більші за 1000",
)

//       8)Підрахувати кількість цін, що більше за 1000
const pricesHigherThanThousand = pricesHistory.reduce(
	(previousCount, price) => (price > 1000 ? previousCount + 1 : previousCount),
	0,
)
console.log(`Кількість цін, що більше за 1000: ${pricesHigherThanThousand}`)

//       9)Підрахувати суму цін, що більше за 1000
const pricesMoreThanThousandSum = pricesHistory.reduce(
	(prevSum, currentPrice) => (currentPrice > 1000 ? prevSum + currentPrice : prevSum),
	0,
)
console.log(`Сума цін, що більше за 1000: ${pricesMoreThanThousandSum}`)

//       10)Знайти першу ціну, що більше за 1000
console.log(`Перша ціна, що більше за 1000: ${pricesHistory.find((price) => price > 1000)}`)

//       11)Знайти індекс першої ціни, що більше за 1000
console.log(`Індекс першої ціни, що більше за 1000: ${pricesHistory.findIndex(price => price > 1000)}`);

//       12)Знайти останню ціну, що більше за 1000
console.log(`Останню ціна, що більше за 1000: ${pricesHistory.findLast(price => price > 1000)}`);

//       13)Знайти індекс останньої ціни, що більше за 1000
console.log(`Індекс останньої ціни, що більше за 1000: ${pricesHistory.findLastIndex(price => price > 1000)}`);


