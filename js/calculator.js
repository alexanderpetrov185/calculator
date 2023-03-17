// (function () {
//     let reset = false; //нужно ли очищать экран при первом нажатии кнопки числа
//     const display = document.querySelector('.calculator__display');
//     const numbersBtn = document.querySelectorAll('.js__btn-number');
//     const clearBtn = document.querySelector('.js__btn-clear');
//     const removeLast = document.querySelector('.js__btn-back');
//     const plusMinusBtn = document.querySelector('.js__btn-plusMinus');

//     // функция отображения числа на дисплее
//     numbersBtn.forEach(each => {
//         each.addEventListener('click', () => {
//             if (!reset) {
//                 clear();
//             }
//             display.innerText += each.innerText;
//         });
//     });

//     // функция установки нуля

//     function setToZero() {
//         clear();
//         display.innerText = 0;
//     }

//     // кнопка очистки
//     clearBtn.addEventListener('click', setToZero);

//     // функция очистки экрана
//     function clear() {
//         display.innerText = "";
//         reset = !reset;
//     }

//     //кнопка удалить последний символ
//     removeLast.addEventListener('click', () => {
//         if (display.innerText.length > 1) {
//             display.innerText = display.innerText.slice(0, -1);
//         }
//         else {
//             if (display.innerText != 0) {
//                 setToZero();
//             }
//         }
//     });

//     // кнопка плюс минус
//     plusMinusBtn.addEventListener('click', () => {
//         if (display.innerText[0] != '-') {
//             display.innerText = '-'.concat(display.innerText);
//         }
//         else {
//             if (display.innerText[0] === '-') {
//                 display.innerText = display.innerText.substr(1);
//             }
//         }
//     });

// }());
