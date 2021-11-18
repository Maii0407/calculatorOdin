
//global variables
const display = document.getElementById('output');
const numBtn = document.querySelectorAll('.number')
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');
const timesBtn = document.getElementById('timesBtn');
const divideBtn = document.getElementById('divideBtn');
const equalsBtn = document.getElementById('equalsBtn');
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');

//mathematical functions for the calculator
function plus(x, y){
    return x + y;
}

function minus(x, y){
    return x - y;
}

function times(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function calDisplay(userInput){
    display.innerHTML = `${userInput}`;
}

