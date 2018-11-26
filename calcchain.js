var calcchain = {
  input: function(inarg) {
    this.value = +inarg;
    return this;
    // this.value = +prompt("Enter the number:");
  },
  sum: function(sumarg) {
    this.value += +sumarg;
    return this;
  },
  mul: function(mularg) {
    this.value *= +mularg;
    return this;
  },
  sub: function(subarg) {
    this.value /= +subarg;
    return this;
  },
  show: function() {
    return this.value;
  }
};

console.log(
  calcchain
    .input(1)
    .sum(4)
    .mul(2)
    .sub(2)
    .show()
);
