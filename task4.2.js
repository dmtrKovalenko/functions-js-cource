// Task 4.2
// Calculator version 2
class Calculator {
  constructor() {
    this.value = 0;
  }

  input(value) {
    this.value = value;
    return this;
  }

  sum(value) {
    this.value += value;
    return this;
  }

  mul(value) {
    this.value *= value;
    return this;
  }

  sub(value) {
    this.value -= value;
    return this;
  }
}

const calculator = new Calculator();

calculator.input(20);
console.log(calculator.value);
calculator.sub(15);
console.log(calculator.value);
calculator.mul(2);
console.log(calculator.value);
calculator.sum(5);
console.log(calculator.value);

calculator.input(20).sub(15).mul(2).sum(5);
console.log(calculator.value);
