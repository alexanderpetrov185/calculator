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

const operations = {
    plus: '+',
    minus: '-',
    division: '÷',
    multiply: '✖'
}

let a = '';
let b = '';
let operation = '';

// отображение числа на дисплее
numbersBtns.forEach(each => {
    each.addEventListener('click', pressNumbers);
});

// отображение операции на дисплее
operationBtns.forEach(each => {
    each.addEventListener('click', pressOperation);
});

// отображение результата на дисплее
resultBtn.addEventListener('click', calculate);

// кнопка очистить
clearBtn.addEventListener('click', () => {
    resetAll();
    calcDisplay.innerText = 0;
});

//кнопка удалить последний символ
removeLast.addEventListener('click', () => {
    // если длинна строки больше 1 то вернуть строку без последнего символа
    if (calcDisplay.innerText.length > 1) {
        calcDisplay.innerText = calcDisplay.innerText.slice(0, -1);
    }
    else {
        calcDisplay.innerText = 0;
    }
    // переопределяем переменные в случае удаления последнего символа
    // если операция есть то разделить строку по операции и переопределить числа
    if (operation != '') {
        let displayStrings = calcDisplay.innerText.split(operation);
        a = displayStrings[0];
        // если второе число после переопределения существует то переопределить его 
        if (displayStrings[1] != undefined) {
            b = displayStrings[1];
        }
    }
    else {
        // иначе первое число равно числу на дисплее
        a = calcDisplay.innerText;
    }
});

// кнопка плюс минус
plusMinusBtn.addEventListener('click', () => {
    // если операция нажата без ввода первого числа (операция с результатом)
    if (a === '') {
        a = calcDisplay.innerText;
    }
    // если операция есть и b не пустое, значит знак меняем у b
    if (operation !== '' && b !== '') {
        if (b[0] !== '-') {
            b = '-'.concat(b);
        }
        else {
            b = b.substring(1);
        }
    }
    else {
        if (a[0] !== '-') {
            a = '-'.concat(a);
        }
        else {
            a = a.substring(1);
        }
    }
    showOnDisplay();
});

// кнопка точки
dotBtn.addEventListener('click', () => {
    // если операция нажата без ввода первого числа (операция с результатом)
    if (a === '') {
        a = calcDisplay.innerText;
    }
    if (!a.includes('.') && operation === '') {
        a += '.';
    }
    if (!b.includes('.') && b !== '') {
        b += '.';
    }
    showOnDisplay();
})

//кнопка ноль (необходимо для того чтобы ноль перед точкой не повторялся)
zeroBtns.forEach(each => {
    each.addEventListener('click', (evt) => {
        // если операция нажата без ввода первого числа (операция с результатом)
        if (a === '') {
            a = calcDisplay.innerText;
        }
        if ((a[0] !== '0' || a.includes('.')) && operation === '') {
            a += evt.target.innerText;
        }
        if ((b[0] !== '0' || b.includes('.')) && operation !== '') {
            b += evt.target.innerText;
        }
        showOnDisplay();
    });
});

// кнопка процентов
percentBtn.addEventListener('click', () => {
    if (b !== '') {
        operation === '÷' || operation === '✖' ? b = +b / 100 :
            operation === '+' || operation === '-' ? b = a * (+b / 100) : false;
    }
    else {
        b = 0;
    }
    calculate();
})

// функция отображения на дисплее
function showOnDisplay() {
    // если b со знаком '-', значит добавляем скобочки
    if (b[0] === '-') {
        calcDisplay.innerText = a + operation + '(' + b + ')';
    }
    else {
        calcDisplay.innerText = a + operation + b;
    }
    console.log('a=' + a + ' operation=' + operation + ' b=' + b);
}

//функция нажатия на кнопку цифры
function pressNumbers(evt) {
    // если операции нет заполняем а
    if (operation === '') {
        if (a < 13) {
            a += evt.target.innerText;
        }
    }
    else {
        b += evt.target.innerText;
    }
    showOnDisplay();
}

//функкция нажатия на операцию
function pressOperation(evt) {
    // если операция нажата без ввода первого числа (операция с результатом)
    if (a === '') {
        a = calcDisplay.innerText;
    }
    operation = evt.target.innerText;
    showOnDisplay();
}

//функция обнуления 
function resetAll() {
    a = '';
    b = '';
    operation = '';
    calcDisplay.innerText = '';
}

// функция вычисления результата операции
function calculate() {
    let result = null;

    // преобразуем строки в число (пустая строка преобразуется в 0)
    a = +a;
    b = +b;

    // если b не было введено
    if (isNaN(b)) {
        b = '';
    }

    // определяем операцию
    switch (operation) {
        case operations.plus:
            result = plus(a, b);
            break;

        case operations.minus:
            result = minus(a, b);
            break;

        case operations.division:
            result = division(a, b);
            break;

        case operations.multiply:
            result = multiply(a, b);
            break;

        default:
            result = calcDisplay.innerText;
            break;
    }

    resetAll();
    console.log('a = ' + a, 'operation ' + `"${operation}"`, 'b = ' + b, 'result = ' + result);
    calcDisplay.innerText = +result.toFixed(15);
}


