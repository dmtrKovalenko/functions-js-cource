
//1
function Calculator() {

    this.inpt = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
       this.a + this.b;
    };
  
    this.mul = function() {
      this.a * this.b;
    };

    this.sub = function() {
      this.a / this.b;
  }
}

//2
let calculator = {
  number = 0,
  input(number) {
    this.value = number;
    console.log(this.value);
    return this;
  },
  sum(number) {
    this.value += number; 
    console.log(this.value);
    return this;
  },
  mul(number) {
    this.value *= number;
    console.log(this.value);
    return this;
  },

  sub(number) {
    this.value = this.value / number;
    console.log(this.value);
    return this;
}
}
calculator.input(5).sum(6);
