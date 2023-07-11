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
console.log(value)

const display = document.querySelector('#display-container');
display.textContent = value;
    })
})

const operator = document.querySelectorAll('#operator');

operator.forEach((button) => {

    button.addEventListener('click', () => {
let value = button.value
console.log(value)

    })
})