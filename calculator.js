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

/*keydown event listener*/

document.addEventListener('keydown', function(e) {
    console.log(e)
    if (e.code == 'Digit1' || e.code == 'Numpad1') {
      console.log('1')
    }
    if (e.code == 'Digit2' || e.code == 'Numpad2') {
        console.log('2')
      }
      if (e.code == 'Digit3' || e.code == 'Numpad3') {
        console.log('3')
      }
      if (e.code == 'Digit4' || e.code == 'Numpad4') {
        console.log('4')
      }
      if (e.code == 'Digit5' || e.code == 'Numpad5') {
        console.log('5')
      }
      if (e.code == 'Digit6' || e.code == 'Numpad6') {
        console.log('6')
      }
      if (e.code == 'Digit7' || e.code == 'Numpad7') {
        console.log('7')
      }
      if (e.code == 'Digit8' || e.code == 'Numpad8') {
        console.log('8')
      }
      if (e.code == 'Digit9' || e.code == 'Numpad9') {
        console.log('9')
      }
      if (e.code == 'Digit0' || e.code == 'Numpad0') {
        console.log('0')
      }
      if (e.code == 'Minus' || e.code == 'NumpadSubtract') {
        console.log('-')
      }
      if (e.code == 'Slash' || e.code == 'NumpadDivide') {
        console.log('/')
      }
      if (e.code == 'NumpadAdd') {
        console.log('+')
      }
      if (e.code == 'NumpadMultiply') {
        console.log('*')
      }
      if (e.code == 'Enter' || e.code == 'NumpadEnter') {
        console.log('enter') 
      }
      if (e.code == 'Period' || e.code == 'NumpadDecimal') {
        console.log('decimal') 
      }
  
  });

/*button event listener*/

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
    if (number == 'AC') {
        return displayResult('0')
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
        const display = document.querySelector('#display');
    
        display.textContent = ''

    }



}


function displayResult(number) {

    const display2 = document.querySelector('#display2');

    display2.textContent = number
}

