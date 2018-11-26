// №1
// Реализовать композирующую функцию compose которая будет принимать
// неограниченное количество функций и вызывать их справа налево
function compose(...func) {
  func.reverse();
  return (...args) => func.forEach(value => value(...args));
}
// const validator = сompose(isEmail, maxLength(5));

// const isValid = validate(“someemail@emal.com”)

// №2
// Реализовать функцию шпиона которая будет сохранять количество вызовов функции
function yourFunc() {
  console.log("a");
}
function makeSpyOn(func) {
  function counter() {
    func();
    return counter.calls++;
  }
  counter.calls = 0;
  return counter;
}
const spy = makeSpyOn(yourFunc);
spy();
spy();

console.log(spy.calls); // 2

// №3
/*
  Напиши функцию создания генератора sequence(start, step). Она при вызове
  возвращает другую функцию-генератор, которая при каждом вызове дает число
  на 1 больше, и так до бесконечности. Начальное число, с которого начинать
  отсчет, и шаг, задается при создании генератора. Шаг можно не указывать,
  тогда он будет равен одному. Начальное значение по умолчанию равно 0. Генераторов
  можно создать сколько угодно
*/

function sequence(start, step = 0) {
  function generator() {
    return (generator.calls += step);
  }

  generator.calls = start - step;
  return generator;
}

const generator = sequence(10, 3);
const generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13
console.log(generator2()); // 7
console.log(generator()); // 16
console.log(generator2()); // 8

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

//calculator.input();
//calculator.sum();

//  Реализовать другой калькулятор который не запрашивает данные, а работает с цепочкой вызовов

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

 // №5
//  Реализовать свою функцию setTimeout которая бы не потеряла контекст вызова

var user = {
  name: "John Smith",
  sayHi: function() {
    alert(this.name);
  },
  timeoutSayHi: function() {
    myTimeout(this.sayHi, 1000);
  }
};

// Сделать возможность дополнительно передать массив аргументов для вызываемой функции



// Написать функцию которая принимает функцию и количество миллисекунд и возвращает функцию обертку.
// Каждый раз когда обертка будет вызвана, должна вызываться внутренняя функция,
// НО внутренняя функция не должна быть вызвана чаще чем раз в переданное кол-во миллисекунд.

// Написать функцию которая принимает функцию и количество миллисекунд и возвращает функцию обертку. Каждый раз когда обертка будет вызвана, должна вызываться внутренняя функция, НО внутренняя функция не должна быть вызвана если с момента предыдущего вызова не прошло заданное кол-во миллисекунд.
