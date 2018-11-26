function Calculator2() {
  return {
    input: function(num1) {
      this.num1 = num1;
      console.log(num1);
      return {
        sum: function(num2) {
          num1 += num2;
          console.log(num1);
          return this;
        },
        mul: function(num2) {
          num1 *= num2;
          console.log(num1);
          return this;
        },
        sub: function(num2) {
          num1 -= num2;
          console.log(num1);
          return this;
        },
        result: function() {
          return num1;
        }
      };
    }
  };
}

let calculator2 = new Calculator2();
console.log(
  calculator2
    .input(10)
    .sum(5)
    .mul(2)
    .sub(11)
    .result()
);
