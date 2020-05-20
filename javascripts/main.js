let screen = document.getElementById("screen")
let calculator = new Calculator();


let numberButtons = document.getElementsByClassName('number')
numberButtons = [...numberButtons]
numberButtons.map(elm => elm.addEventListener('click', elm => clickOnNumber(elm.target.innerHTML)))

let opButtons = document.getElementsByClassName('operation')
opButtons = [...opButtons]
opButtons.map(elm => elm.addEventListener('click', elm => clickOnOperation(elm.target.innerHTML)))


let screenNumber = screen.textContent


printOnScreen = num => screen.textContent = num

clickOnNumber = num => {
    screenNumber === '0' ? screenNumber = num : screenNumber += num
    printOnScreen(screenNumber)
}

clickOnOperation = operator => {

    calculator.setNumber(screenNumber)

    if (operator === '+' || operator === '-' || operator === 'x' || operator === '/') {

        let result = calculator.calculate()
        printOnScreen(result)
        calculator.setOperator(operator)

    } else if (operator === '=') {

        console.log('se llama al click operation con igual')
        let result = calculator.calculate()
        printOnScreen(result)

    } else {

        calculator.clear()
        screenNumber = 0
        printOnScreen(screenNumber)

    }

    screenNumber = ""


}



