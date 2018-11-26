function Calculator() {
  this.a = 0;
  this.b = 0;

  this.input = () => {
    this.a = Number(prompt("Enter first number: ", 0));
    this.b = Number(prompt("Enter second number: ", 0));
  };

  this.sum = () => {
    return this.a + this.b;
  };

  this.mul = () => {
    return this.a * this.b;
  };

  this.sub = () => {
    return this.a - this.b;
  };
}
const calculator = new Calculator();

calculator.input();
calculator.mul();
calculator.sub();
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator.sub());
