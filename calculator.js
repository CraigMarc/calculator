function add (first, second){
    return first + second
}

function subtract (first, second){
    return first - second
}

function multiply (first, second){
    return first * second
}

function divide (first, second){
    return first / second
}

function operate (operation, first, second) {
if (operation == '+') {
    return add(first, second)
}
if (operation == '-') {
    return subtract(first, second)
}
if (operation == '*') {
    return multiply(first, second)
}
if (operation == '/') {
    return divide(first, second)
}


}

const number = document.querySelectorAll('#number');

number.forEach((button) => {

    button.addEventListener('click', () => {
let value = button.value

display(value)

    })
})

const operator = document.querySelectorAll('#operator');

operator.forEach((button) => {

    button.addEventListener('click', () => {
let value = button.value

/*not working --------
const display2 = document.querySelector('#display-container2');
display2.textContent = value;*/

    })
})
let numArr = []
function display (number) {
   
    function plusMinus (number) {
    if (number == 'plusMinus' && numArr.length == 0){
        numArr.push('-')
        return numArr
    }
    if (number == 'plusMinus' && numArr[0] == '-') {
        numArr = numArr.slice(1)
        return numArr
    }
    if (number == 'plusMinus' && numArr.length > 0) {
numArr.unshift('-')
return numArr
    }

if (numArr != 'plusMinus'){
numArr.push(number) 
return numArr
}
    }

plusMinus(number)


    const display = document.querySelector('#display-container');
display.textContent = numArr.join('');
}