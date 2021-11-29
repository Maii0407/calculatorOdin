
//global variables
const numBtn = document.querySelectorAll('.number');
const decBtn = document.getElementById('decimal');
const operatorBtn = document.querySelectorAll('.operator');
const equalsBtn = document.getElementById('equalsBtn');
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');
const lowerDisplay = document.getElementById('lower');
const upperDisplay = document.getElementById('upper');
const operatorDisplay = document.getElementById('operator-display');

//event listeners
clearBtn.addEventListener('click', clearCal);

deleteBtn.addEventListener('click', function(){
    lowerDisplay.innerHTML = lowerDisplay.innerHTML.slice(0, -1);
})

numBtn.forEach((button) => button.addEventListener('click', function(e){
    lowerDisplay.innerHTML += button.innerHTML;
}))

operatorBtn.forEach((button) => button.addEventListener('click', function(e){
    if(upperDisplay.textContent === ''){
        upperDisplay.innerHTML = lowerDisplay.innerHTML;
        operatorDisplay.innerHTML = button.innerHTML;
        lowerDisplay.innerHTML = '';
        decBtn.disabled = false;
    } else{
        equals();
        operatorDisplay.innerHTML = button.innerHTML;
    }
}))

decBtn.addEventListener('click', function(e){
    lowerDisplay.innerHTML += e.target.innerHTML;
    decBtn.disabled = true;
})

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
    if(operatorDisplay.innerHTML === '-'){
        upperDisplay.innerHTML = minus(upperDisplay.innerHTML, lowerDisplay.innerHTML);
        lowerDisplay.innerHTML = '';
        operatorDisplay.textContent = '';
    } else if(operatorDisplay.innerHTML === '÷'){
        upperDisplay.innerHTML = divide(upperDisplay.innerHTML, lowerDisplay.innerHTML);
        lowerDisplay.innerHTML = '';
        operatorDisplay.textContent = '';
    } else if(operatorDisplay.innerHTML === 'x'){
        upperDisplay.innerHTML = times(upperDisplay.innerHTML, lowerDisplay.innerHTML);
        lowerDisplay.innerHTML = '';
        operatorDisplay.textContent = '';
    }else if(upperDisplay.innerHTML === '' || operatorDisplay.innerHTML === '' ||
    lowerDisplay.innerHTML === ''){
        clearCal();
    }else{
        upperDisplay.innerHTML = plus(Number(upperDisplay.innerHTML), Number(lowerDisplay.innerHTML));
        lowerDisplay.innerHTML = '';
        operatorDisplay.textContent = '';
    }
}

//clear calculator display
function clearCal(){
    lowerDisplay.textContent = '';
    upperDisplay.textContent = '';
    operatorDisplay.textContent = '';
    decBtn.disabled = false;
}