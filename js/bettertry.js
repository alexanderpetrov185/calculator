const calcDisplay = document.querySelector('.calculator__display');
const numbersBtns = document.querySelectorAll('.js__btn-number');
const clearBtn = document.querySelector('.js__btn-clear');
const removeLast = document.querySelector('.js__btn-back');
const plusMinusBtn = document.querySelector('.js__btn-plusMinus');
const calcucatorBtns = document.querySelectorAll('.calculator__button:not(.not__displayed)');
const operationBtns = document.querySelectorAll('.js__btn-operation');
const dotBtn = document.querySelector('.js__btn-dot');
const resultBtn = document.querySelector('.js__btn-result');
const zeroBtns = document.querySelectorAll('.js__btn-zero');
const percentBtn = document.querySelector('.js__btn-percent');

const mainMethods = {
    showOnDisplay: function (evt) {
        calcDisplay.innerText = this;
    }
}

const operations = {
    plus: '+',
    minus: '-',
    division: '÷',
    multiply: '✖'
}