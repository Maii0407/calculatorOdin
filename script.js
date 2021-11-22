
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

//true false values to set if its plus,minus,divide or times
let add = false;
let sub = false;
let div = false;
let multi = false;

//event lsiteners
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

//calculator display 
function calDisplay(x){
    document.getElementById('output').value += x;
}

//clear calculator display
function clearCal(){
    document.getElementById('output').value = '';
    add = false;
    sub = false;
    div = false;
    multi = false;
}