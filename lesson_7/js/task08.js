"use strict";
// Задача 8:  Створити функцію, яка виводить банер - у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення - тег img повине знаходитись у середині тега a
// Розв'язок та вивід на сторінку
const bannerImagePath = "img/01.webp";
const bannerLink = "https://www.google.com/";
const bannerTitle = "Найпопулярніша пошукова система";
function showBanner(image, link, title) {
    return `<div class="banner">
					<a href="${link}" target="_blank" class="banner__link">
						<img src="${image}" alt="google">
					</a>
					<h2 class="banner__subtitle">${title}</h2>
				</div>
			`;
}
document.write(showBanner(bannerImagePath, bannerLink, bannerTitle));
