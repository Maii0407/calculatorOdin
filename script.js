
//global variables
const numBtn = document.querySelectorAll('.number');
const decimal = document.getElementsByClassName('decimal');
const operatorBtn = document.querySelectorAll('.operator');
const equalsBtn = document.getElementById('equalsBtn');
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');
const lowerDisplay = document.getElementById('lower');
const upperDisplay = document.getElementById('upper');

//event lsiteners
clearBtn.addEventListener('click', clearCal);
numBtn.forEach((button) => button.addEventListener('click', function(e){
    lowerDisplay.innerHTML += button.innerHTML;
}));
operatorBtn.forEach((button) => button.addEventListener('click', function(e){
    upperDisplay.innerHTML = lowerDisplay.innerHTML;
    lowerDisplay.innerHTML = '';
}));
equalsBtn.addEventListener('click', function(e){
    upperDisplay.innerHTML = minus(upperDisplay.innerHTML, lowerDisplay.innerHTML);
    lowerDisplay.innerHTML = '';
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



//clear calculator display
function clearCal(){
    lowerDisplay.textContent = '';
    upperDisplay.textContent = '';
}