function a() {
  console.log('a is a function');
}

function b(name) {
  console.log(`b is a function ${name}`);
}

function c(name) {
  console.log(`c is a function ${name}`);
}

// task 1 compose function
function compose(...funcs) {
  return (args) => {
    funcs.reverse();
    funcs.forEach((func) => {
      func(args);
    });
  };
}

const v = compose(a, b, c);
v('Eugene');

// task 2 spy function
function makeSpyOn(myFunc) {
  function spy() {
    myFunc();
    spy.calls += 1;
    return spy.calls;
  }

  spy.calls = 0;

  return spy;
}

// const spy = makeSpyOn(a);
// spy();
// spy();
// spy();
// console.log(spy.calls);

// task3 generator
function sequence(start = 0, step = 1) {
  let counter = start;

  return () => {
    counter += step;

    if (counter - step === start) {
      return start;
    }

    return counter - step;
  };
}

// const generator = sequence(10, 3);
// const generator2 = sequence(7, 1);

// console.log(generator());
// console.log(generator());
// console.log(generator2());
// console.log(generator());
// console.log(generator2());

// task4.1 calculator
class Calculator {
  input() {
    this.firstNumber = parseInt(prompt('Enter first number', 0));
    this.secondNumber = parseInt(prompt('Enter second number', 0));
  }

  sum() {
    return this.firstNumber + this.secondNumber;
  }

  mul() {
    return this.firstNumber * this.secondNumber;
  }

  sub() {
    return this.firstNumber - this.secondNumber;
  }
}

// let calc = new Calculator();
// calc.input();
// console.log(calc.sum());
// console.log(calc.mul());
// console.log(calc.sub());

// task4.2 cahining calculator
class CalcChaining {
  input(num) {
    this.calc = num;
    return this;
  }

  sum(num) {
    this.calc += num;
    return this;
  }

  mul(num) {
    this.calc *= num;
    return this;
  }

  sub(num) {
    this.calc -= num;
    return this;
  }
}

// const calcChain = new CalcChaining();
// console.log(calcChain.input(1).sum(2).mul(3).sub(4));

// task5 myTimeout
function myTimeout(func, ms) {
  setTimeout(() => func.apply(this), ms);
}

const user = {
  name: 'John Smith',
  sayHi() {
    alert(this.name);
  },

  timeoutSayHi() {
    const mt = myTimeout.bind(this);
    mt(this.sayHi, 1000);
  },
};

// user.timeoutSayHi();

// task6
function wrapper(func, ms) {
  let timer = null;

  return (...args) => {
    const comleteFunc = () => {
      func.apply(this, args);
      timer = null;
    };

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(comleteFunc, ms);
  };
}

// const wrapp = wrapper(b, 2000);
// wrapp('Eugene');
// setTimeout(() => wrapp('Vlad'), 1000);
// wrapp('Vika');

// task7
function wrapperSecond(func, ms) {
  let lastCall = 0;
  let nowCall = 0;

  return () => {
    nowCall = Date.now();

    if (nowCall > lastCall + ms) {
      lastCall = nowCall;
      func.apply(this);
    }
  };
}

// const wrp = wrapperSecond(a, 1000);
// wrp();
// setTimeout(wrp, 500);

// task8
const modules = new Map();

function createModule(moduleName, func) {
  modules.set(moduleName, func());
}

function myRequire(moduleName) {
  return modules.get(moduleName);
}

const myModule = createModule('module', () => ({
  sayHi: () => console.log('HI'),
}));

const anotherModule = createModule('newModule', () => {
  const myFirstModule = myRequire('module');
  myFirstModule.sayHi();
});
