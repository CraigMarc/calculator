let storageArray = []

function add(first, second) {
    return first + second
}

function subtract(first, second) {
    return first - second
}

function multiply(first, second) {
    return first * second
}

function divide(first, second) {
    return first / second
}

function operate(operation, first, second) {
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

        if (second == 0) {
            return "Can't divide by zero"
        }

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



function plusMinus(number) {
    if (number == 'plusMinus' && numArr.length == 0) {
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

    if (numArr != 'plusMinus') {
        numArr.push(number)
        return numArr
    }
}


let numArr = []

function display(number) {

    plusMinus(number)


    let number1 = ""
    let operator = ""

    if (number == '+' || number == '-' || number == '*' || number == '/' || number == '=' || number == 'AC') {
        number1 = numArr.join('')
        operator = number
        

        storeNumbers(number1.slice(0, number1.length - 1), operator)
        numArr = []

    }

    displayResult(numArr.join(''))

}



function storeNumbers(number1, operator) {
    let regex = /[+]|[/]|[*][-]/

    if (regex.test(number1) == false) {
        storageArray.push(number1)
    }

    storageArray.push(operator)

    console.log(storageArray)

    /*check for duplicate operators*/
    
    
    if (storageArray[storageArray.length-2] == '' 
    && regex.test(storageArray[storageArray.length-1]) == true ){
 
 storageArray.splice(storageArray.length - 3, storageArray.length - 2)
}
   
    
   

    if (storageArray.length == 4 && storageArray[storageArray.length - 1] != 'AC'
        && storageArray[1] == '=')
         {
            
           
            let newOperator = storageArray[3]
            let result = storageArray[0]
            storageArray = []
    
            storageArray.push(result)
            storageArray.push(newOperator)
           
    }

    if (storageArray.length == 4 && storageArray[storageArray.length - 1] != 'AC' &&
    storageArray[1] != '=') 
    {
        let operation = storageArray[1]
        let first = Number(storageArray[0])
        let second = Number(storageArray[2])
        let newOperator = storageArray[3]
        let result = operate(operation, first, second)
        storageArray = []

        storageArray.push(result)
        storageArray.push(newOperator)
        displayResult(result)

        const display = document.querySelector('#display');
        display.textContent = result

    }
    if (storageArray[storageArray.length - 1] == 'AC') {

        storageArray = []
        displayResult('0')
        const display2 = document.querySelector('#display');
    
        display2.textContent = ''

    }



}


function displayResult(number) {

    const display2 = document.querySelector('#display2');

    display2.textContent = number
}