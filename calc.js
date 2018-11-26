var calc = {
  input: function() {
    // this.first = +prompt("Enter your first number:");
    this.first = 1;
    // this.second = +prompt("Enter second number:");
    this.second = 2;
  },
  sum: function() {
    this.first + this.second;
  },
  mul: function() {
    this.first * this.second;
  },
  sub: function() {
    this.first - this.second;
  }
};

calc.input();

console.log(calc.sum());
