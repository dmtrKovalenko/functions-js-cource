const calculator = {
  input() {
    this.firstNumber = parseInt(prompt('Enter your first number', 0));
    this.secondNumber = parseInt(prompt('Enter your second number', 0));
  },
  sum() {
    return this.firstNumber + this.secondNumber;
  },
  mul() {
    return this.firstNumber * this.secondNumber;
  },
  sub() {
    return this.firstNumber / this.secondNumber;
  },
};

calculator.input();
calculator.sub();
