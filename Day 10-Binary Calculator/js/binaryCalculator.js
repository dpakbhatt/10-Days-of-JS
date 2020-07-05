var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var btnClr = document.getElementById('btnClr');
var btnEql = document.getElementById('btnEql');
var btnSum = document.getElementById('btnSum');
var btnSub = document.getElementById('btnSub');
var btnMul = document.getElementById('btnMul');
var btnDiv = document.getElementById('btnDiv');
var res = document.getElementById('res');

btn0.addEventListener('click', enter('0'));
btn1.addEventListener('click', enter('1'));
btnClr.addEventListener('click', enter('clear'));
btnEql.addEventListener('click', enter('enter'));
btnSum.addEventListener('click', enter('+'));
btnSub.addEventListener('click', enter('-'));
btnMul.addEventListener('click', enter('*'));
btnDiv.addEventListener('click', enter('/'));

function enter(char) {
    return function() {
        if (char === 'clear')
            return (res.value = '');
        if (char === 'enter')
            return calc();
        res.value += char;
    }
}

function calc() {
    var resVal = res.value;
    var operator = resVal.match(/[\+\-\*\/]/);
    var operands = resVal.split(/[\+\-\*\/]/);
    var result;
    switch (operator[0]) {
        case '+':
            result = parseInt(operands[0], 2) + parseInt(operands[1], 2);
            break;
        case '-':
            result = parseInt(operands[0], 2) - parseInt(operands[1], 2);
            break;
        case '*':
            result = parseInt(operands[0], 2) * parseInt(operands[1], 2);
            break;
        case '/':
            result = parseInt(operands[0], 2) / parseInt(operands[1], 2);
            break;
    }
    res.value = result.toString(2);
}