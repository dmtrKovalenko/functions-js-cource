let calculator0 = {
  input: function(x) {
    this.x = x;
  },
  sum: function(y) {
    this.x += y;
  },
  mul: function(y) {
    this.x *= y;
  },
  sub: function(y) {
    this.x -= y;
  }
};

let calculator = {
  input: function(x) {
    this.x = x;
    return this;
  },
  sum: function(y) {
    this.x += y;
    return this;
  },
  mul: function(y) {
    this.x *= y;
    return this;
  },
  sub: function(y) {
    this.x -= y;
    return this;
  }
};
calculator0.input(1);
calculator0.sum(2);
calculator0.mul(3);
calculator0.sub(4);
console.log(calculator0.x);
