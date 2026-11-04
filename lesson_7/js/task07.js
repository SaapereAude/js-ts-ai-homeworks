"use strict";
// Задача 7: Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)
// Розв'язок та вивід на сторінку
function getRandomImagePath(imgPath1, imgPath2, imgPath3, imgPath4) {
    let randomNum = 1 + Math.floor(Math.random() * 4);
    let resPath = "";
    switch (randomNum) {
        case 1:
            resPath = imgPath1;
            break;
        case 2:
            resPath = imgPath2;
            break;
        case 3:
            resPath = imgPath3;
            break;
        case 4:
            resPath = imgPath4;
            break;
    }
    return resPath;
}
let imgPath = getRandomImagePath("https://png.pngtree.com/png-vector/20250513/ourmid/pngtree-joyful-emoji-with-thumbs-up-perfect-for-social-media-graphics-png-image_16239943.png", "https://media.istockphoto.com/id/868644330/photo/happy-emoji-isolated-on-white-background-emoticon-with-raised-hands-3d-rendering.jpg?s=612x612&w=0&k=20&c=XOlAgx55js5hRd8bQGb0IsIxKLdGvoWHvDaA5J-NNl0=", "https://st3.depositphotos.com/1472772/17102/i/450/depositphotos_171022090-stock-photo-lol-emoji-isolated-on-white.jpg", "https://emojiisland.com/cdn/shop/products/16_large.png?v=1571606116");
document.write(`<img src="${imgPath}" width="100"/>`);
