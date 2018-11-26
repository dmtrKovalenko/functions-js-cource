/* 
  №4
  Реализовать объект калькулятор у которого есть методы input, sum, mul, sub 
  (ввод данных, сумма, умножение и вычитание). input должен вызывать ввод 2 цифр 
  от пользователя через prompt и сохранять в себе. Остальные методы должны производить 
  над цифрами соответствующие операции
*/
const calculator = {
  input() {
    this.a = +prompt("Enter first number", "0");
    this.b = +prompt("Enter second number", "0");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  sub() {
    return this.a - this.b;
  }
};

// calculator.input();
// calculator.sum();
// Реализовать другой калькулятор который не запрашивает данные, а работает с цепочкой вызовов

const chainCalculator = {

  input(value) {
    this.result = value;
    return this;
  },

  sum(value) {
    this.result += value;
    return this;
  },

  mul(value) {
    this.result *= value;
    return this;
  },

  sub(value) {
    this.result -= value;
    return this;
  }
};

chainCalculator
  .input(1)
  .sum(2)
  .mul(3)
  .sub(4);
