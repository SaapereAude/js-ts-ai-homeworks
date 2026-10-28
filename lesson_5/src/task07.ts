// Задача 7: Вивести на екран N абзаців (N вводиться користувачем) за зразком:

// Розв'язок та вивід на сторінку
if (confirm("Почати тестування?")) {
	
	let numParagraph = parseInt(prompt('Кількість абзаців, які потрібно вивести на екран:', '4')!)
	let layout = '';

	//  Обчислення
	for (let i = 1; i <= numParagraph; i++) { 
		layout += `<h1><span>Заголовок ${i}</span></h1>`
		for (let j = 1; j <= i; j++) { 
			layout += `<p> <span>Розділ ${i}, параграф ${j}</span></p>`
		}
		layout += '<hr>'
	}

	document.write(`${layout}`)
}
