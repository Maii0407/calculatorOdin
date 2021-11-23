
//global variables
const numBtn = document.querySelectorAll('.number');
const decimal = document.getElementsByClassName('decimal');
const operatorBtn = document.querySelectorAll('.operator');
const equalsBtn = document.getElementById('equalsBtn');
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');
const lowerDisplay = document.getElementById('lower');
const upperDisplay = document.getElementById('upper');

let add = false;
let sub = false;
let div = false;
let multi = false;

//event lsiteners
clearBtn.addEventListener('click', clearCal);
numBtn.forEach((button) => button.addEventListener('click', function(e){
    lowerDisplay.innerHTML += button.innerHTML;
}));
operatorBtn.forEach((button) => button.addEventListener('click', function(e){
    upperDisplay.innerHTML = lowerDisplay.innerHTML;
    lowerDisplay.innerHTML = '';
}));
equalsBtn.addEventListener('click', equals);

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

function equals(e){
    if(sub === true){
        upperDisplay.innerHTML = minus(upperDisplay.innerHTML, lowerDisplay.innerHTML);
        lowerDisplay.innerHTML = '';
    } else if(div === true){
        upperDisplay.innerHTML = divide(upperDisplay.innerHTML, lowerDisplay.innerHTML);
        lowerDisplay.innerHTML = '';
    } else if(multi === true){
        upperDisplay.innerHTML = times(upperDisplay.innerHTML, lowerDisplay.innerHTML);
        lowerDisplay.innerHTML = '';
    } else{
        upperDisplay.innerHTML = plus(parseInt(upperDisplay.innerHTML), parseInt(lowerDisplay.innerHTML));
        lowerDisplay.innerHTML = '';
    }
}

//clear calculator display
function clearCal(){
    lowerDisplay.textContent = '';
    upperDisplay.textContent = '';
    add = false;
    sub = false;
    div = false;
    multi = false;
}

//decide which math operation to use
function turnAdd(){
    add = true;
    sub = false;
    div = false;
    multi = false;
}

function turnSub(){
    add = false;
    sub = true;
    div = false;
    multi = false;
}

function turnDiv(){
    add = false;
    sub = false;
    div = true;
    multi = false;
}

function turnMulti(){
    add = false;
    sub = false;
    div = false;
    multi = true;
}