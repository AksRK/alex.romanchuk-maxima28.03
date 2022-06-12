'use strict';

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const signInput = document.getElementById('sign');
const buttonСount = document.getElementById('count');
const buttonReset = document.getElementById('reset');
const resultOutput = document.querySelector('.result__display');
const sysMsg = document.querySelector('.sys-msg');

buttonСount.addEventListener('click', () => {
    const value1 = input1.value.trim();
    const value2 = input2.value.trim();
    const sign = signInput.value.trim();
    let result;

    function resultText(x){
        resultOutput.textContent = result;
        sysMsg.textContent = x;
    };

    if (value1 === ''){
        sysMsg.textContent = 'Первое число не указано';
        resultOutput.textContent = '0';
    }else if (isNaN(value1)){
        sysMsg.textContent = 'Некорректный ввод чисел';
        resultOutput.textContent = '0';
    }else if (value2 === ''){
        sysMsg.textContent = 'Второе число не указано';
        resultOutput.textContent = '0';
    }else if (isNaN(value2)){
        sysMsg.textContent = 'Некорректный ввод чисел';
        resultOutput.textContent = '0';
    }else {
        switch (sign) {
            case '': 
                sysMsg.textContent = 'Необходимо указать операцию +|-|*|/';
                resultOutput.textContent = '0';
                break;
            case '-': 
                result = +value1 - +value2;
                resultText('Произведите вычисления');
                break;
            case '+': 
                result = +value1 + +value2;
                resultText('Произведите вычисления');
                break;
            case '*': 
                result = +value1 * +value2;
                resultText('Произведите вычисления');
                break;
            case '/': 
                if (value2 === '0' || value2 === '-0') {
                    sysMsg.textContent = 'Деление на ноль не определено';
                    resultOutput.textContent = '0';
                    break;
                }else{
                    result = +value1 / +value2;
                    resultText('Произведите вычисления');
                    break;
                }
            default:
                sysMsg.textContent = 'Программа не поддерживает такую операцию';
                resultOutput.textContent = '0';
                break;
        }
    };
});

resultOutput.addEventListener('click', () => {
    input1.value = resultOutput.textContent;
});

buttonReset.addEventListener('click', () => {
    input1.value = '';
    input2.value = '';
    signInput.value = '';
    resultOutput.textContent = '0';
    sysMsg.textContent = 'Произведите вычисления';
});