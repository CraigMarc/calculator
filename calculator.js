let storageArray = []

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


let numArr = []

function display (number) {
    
plusMinus(number)

let number1 = ""
let operator = ""

if (number == '+' || number == '-' || number == '*' || number == '/' || number == '=' || number == 'AC'){
number1 = numArr.join('')
operator = number
storeNumbers(number1, operator)
numArr = []

}

/*
    const display = document.querySelector('#display-container');
display.textContent = numArr.join('');
*/

displayResult(numArr.join(''))

}

function storeNumbers(number1, operator){
storageArray.push(number1, operator)
console.log(storageArray)
console.log(storageArray[storageArray.length - 1] == "AC") 

if (storageArray[storageArray.length - 1] == 'AC'){
    
     storageArray = []
}

if (storageArray.length == 4 && storageArray[storageArray.length -1] != 'AC'){
    let operation = storageArray[1]
    let first = Number(storageArray[0].slice(0, storageArray[0].length-1))
    let second = Number(storageArray[2].slice(0, storageArray[2].length-1))
    let newOperator = storageArray[3]
    let result = operate (operation, first, second)
    console.log(result)
    storageArray.push(result + '-')
    storageArray.push(newOperator)
   displayResult(result)
   /*
   const display = document.querySelector('#display2');
    display.textContent = result*/

}
}

function displayResult (number) {
    
    const display = document.querySelector('#display');

    display.textContent = number
}