'use scrict';

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const signInput = document.getElementById('sign');
const buttonСount = document.getElementById('count');
const buttonReset = document.getElementById('reset');
const resultOutput = document.getElementById('result');
const sysMsg = document.querySelector('.sys-msg');

buttonСount.addEventListener('click', () => {
    const value1 = input1.value.trim();
    const value2 = input2.value.trim();
    const sign = signInput.value.trim();
    let result;

    function resultText(x){
        resultOutput.value = result;
        sysMsg.textContent = x;
    }

    if (value1 === ''){
        sysMsg.textContent = 'Первое число не указано';
    }else if (isNaN(value1)){
        sysMsg.textContent = 'Некорректный ввод чисел';
    }else if (value2 === ''){
        sysMsg.textContent = 'Второе число не указано';
    }else if (isNaN(value2)){
        sysMsg.textContent = 'Некорректный ввод чисел';
    }else {
        if(sign === '') {
            sysMsg.textContent = 'Необходимо указать операцию +|-|*|/';
        }else if(sign === '-') {
            result = +value1 - +value2;
            resultText('Произведите вычисления');
        }else if(sign === '/') {
            if (value2 === '0'){
                sysMsg.textContent = 'Деление на ноль не определено';
            }else{
                result = +value1 / +value2;
                resultText('Произведите вычисления');
            }
        }else if(sign === '*') {
            result = +value1 * +value2;
            resultText('Произведите вычисления');
        }else if (sign === '+'){
            result = +value1 + +value2;
            resultText('Произведите вычисления');
        }else {
            sysMsg.textContent = 'Программа не поддерживает такую операцию';
        };
    };
});

buttonReset.addEventListener('click', () => {
    input1.value = '';
    input2.value = '';
    signInput.value = '';
    resultOutput.value = '';
    sysMsg.textContent = 'Произведите вычисления';
});
