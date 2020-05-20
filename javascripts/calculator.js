class Calculator {
    constructor() {

        this.firstNumber = null
        this.secondNumber = null
        this.operator = undefined
    }

    setNumber = number => {
        this.firstNumber ? this.secondNumber = parseInt(number) : this.firstNumber = parseInt(number)
    }

    setOperator = operator => {
        this.operator = operator
    }


    calculate = () => {
        return this.secondNumber ? this.firstNumber = this.operate() : this.firstNumber
    }

    operate = () => {

        switch (this.operator) {
            case '+':
                return this.firstNumber + this.secondNumber

            case '-':
                return this.firstNumber - this.secondNumber

            case 'x':
                return this.firstNumber * this.secondNumber

            case '/':
                return this.firstNumber / this.secondNumber

            default:
                break

        }
    }

    clear = () => {
        this.firstNumber = null
        this.secondNumber = null
        this.operator = undefined
    }








}