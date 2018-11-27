const calculator = {
  firstNumber: 0,
  secondNumber: 0,
  input() {
    while (1) {
      const firstNumber = prompt("Input first number");
      if (!isNaN(+firstNumber) && firstNumber !== null) {
        this.firstNumber = +firstNumber;
        break;
      }
    }
    while (1) {
      const secondNumber = prompt("Input second number");
      if (!isNaN(+secondNumber) && secondNumber !== null) {
        this.secondNumber = +secondNumber;
        break;
      }
    }
  },
  sum() {
    return this.firstNumber + this.secondNumber;
  },
  mul() {
    return this.firstNumber * this.secondNumber;
  },
  sub() {
    return this.firstNumber - this.secondNumber;
  }
};
calculator.input();
calculator.sum();
calculator.mul();
calculator.sub();
console.log(calculator.sub());
