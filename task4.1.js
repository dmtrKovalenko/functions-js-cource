// Task 4.1
// Calculator version 1
class Calculator {
  constructor() {
    this.value = 0;
  }

  /* eslint-disable no-undef */
  input() {
    this.firstNumber = parseInt(prompt('Enter first number', 0), 10);
    this.secondNumber = parseInt(prompt('Enter second number', 0), 10);
  }

  sum() {
    return this.firstNumber + this.secondNumber;
  }

  mul() {
    return this.firstNumber * this.secondNumber;
  }

  sub() {
    return this.firstNumber - this.secondNumber;
  }
}

const calculator = new Calculator();

calculator.input();

console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator.sub());
