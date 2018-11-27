var calculator = {
  input: function() {
    this.a = parseInt(prompt("Input first value:"));
    this.b = parseInt(prompt("Input second value:"));
    return this;
  },
  sum: function() {
    return (this.value = this.a + this.b);
  },
  mul: function() {
    return (this.value = this.a * this.b);
  },
  sub: function() {
    return (this.value = this.a - this.b);
  },
};

// console.log(calculator.input().sum());

///Chain calculator

var calculator = {
  input: function(inputVal) {
    this.result = inputVal;
    return this;
  },
  sum: function(sumVal) {
    this.result += sumVal;
    return this;
  },
  mul: function(mulVal) {
    this.result *= mulVal;
    return this;
  },
  sub: function(subVal) {
    this.result -= subVal;
    return this;
  },
};

console.log(
  calculator
    .input(2)
    .sum(5)
    .mul(3).result
);
