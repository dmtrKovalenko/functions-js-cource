const calculator = {
  state: 0,
  input(value = 0) {
    this.state = value;
    return this;
  },
  sum(value = 0) {
    this.state += value;
    return this;
  },
  mul(value = 0) {
    this.state *= value;
    return this;
  },
  sub(value = 0) {
    this.state -= value;
    return this;
  },
  calculate() {
    return this.state;
  }
};
calculator
  .input(1)
  .sum(2)
  .mul(3)
  .sub(4)
  .calculate();
