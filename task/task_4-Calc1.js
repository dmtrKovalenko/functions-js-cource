function Calculator() {

  this.input = function() {
    this.num1 = +prompt('num1:', 0);
    this.num2 = +prompt('num2:', 0);
  };
  this.sum = function() {
    return this.num1 + this.num2;
  };
  this.mul = function() {
    return this.num1 * this.num2;
	};
	this.sub = function() {
		return this.num1 - this.num2
	}
}

let calculator = new Calculator();
calculator.input();
console.log("Сумма: " + calculator.sum());
console.log("Умножение: " + calculator.mul());
console.log("Вычитание: " + calculator.sub());