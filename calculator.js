const calculator = {
  input: function() {
    this.a = +prompt("a: ");
    this.b = +prompt("b: ");
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  },
  sub: function() {
    return this.a - this.b;
  }
};

const calc = {
  input: function(a) {
    this.res = a;
    return this;
  },
  sum: function(a) {
    this.res += a;
    return this;
  },
  mul: function(a) {
    this.res *= a;
    return this;
  },
  sub: function(a) {
    this.res -= a;
    return this;
  },
  show: function() {
    console.log(this.res);
  }
};

calc
  .input(1)
  .sum(2)
  .mul(3)
  .sub(4)
  .show();
