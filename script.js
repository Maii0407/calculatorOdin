
//global variables
const numBtn = document.querySelectorAll('.number');
const decimal = document.getElementsByClassName('decimal');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');
const timesBtn = document.getElementById('timesBtn');
const divideBtn = document.getElementById('divideBtn');
const equalsBtn = document.getElementById('equalsBtn');
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');
const lowerDisplay = document.getElementById('lower');

//true false values to set if its plus,minus,divide or times
let add = false;
let sub = false;
let div = false;
let multi = false;

//event lsiteners
numBtn.forEach((button) => button.addEventListener('click', function(e){
    lowerDisplay.innerText += button.innerHTML;
}))
clearBtn.addEventListener('click', clearCal);
equalsBtn.addEventListener('click', equals);
plusBtn.addEventListener('click', function(){
    return add = true;
});

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

//equals function
function equals(){
    if(add === true){
        plus();
    } else if(sub === true){
        minus();
    } else if(div === true){
        divide();
    } else if(multi === true){
        times();
    }
}

//clear calculator display
function clearCal(){
    lowerDisplay.textContent = '';
    add = false;
    sub = false;
    div = false;
    multi = false;
}