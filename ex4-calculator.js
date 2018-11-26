
//   Реализовать объект калькулятор у которого есть методы input, sum, mul, sub (ввод данных, сумма, умножение и вычитание). input должен вызывать ввод 2 цифр от пользователя через prompt и сохранять в себе. Остальные методы должны производить над цифрами соответствующие операции
let calculator = {
  input: function () {
    this.a = +prompt('Enter value A', 1);
    this.b = +prompt('Enter value B', 2);
  },
  sum: function () {
    let res = this.a + this.b
    console.log(res)
    return res;
  },
  mul: function () {
    let res = this.a * this.b
    console.log(res)
    return res;
  },
  sub: function () {
    let res = this.a - this.b
    console.log(res)
    return res;
  }
}

calculator.input();
calculator.sum();

//   Реализовать другой калькулятор который не запрашивает данные, а работает с цепочкой вызовов
let calculator2 = {
  res: 0,
  input: function (x) {
    this.res = x;
    console.log(this.res);
    return this;
  },
  sum: function (x) {
    this.res += x;
    console.log(this.res);
    return this;
  },
  mul: function (x) {
    this.res *= x;
    console.log(this.res);
    return this;
  },
  sub: function (x) {
    this.res -= x;
    console.log(this.res);
    return this;
  }
}

calculator2.input(1).sum(2).mul(3).sub(4)