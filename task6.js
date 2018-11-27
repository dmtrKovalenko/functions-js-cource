// Task 6

// Не знаю почему, но если использовать стрелочную функцию вместо return function(){ ...
// То выводит в консоль [Function: func]
// Понятия с чем это может быть связано, я не имею. Все отлично работает с обычной записью функции
// Это более чем странно для меня
// Eslint дико ругается на это :С

function delay(func, timeout) {
  return function () {
    const localThis = this;
    const localArgs = arguments;

    setTimeout(() => {
      func.apply(localThis, localArgs);
    }, timeout);
  };
}

function func(x) {
  console.log(x);
}

const test1 = delay(func, 1000);
const test2 = delay(func, 1500);
const test3 = delay(func, 2000);
const test4 = delay(func, 3000);

test1('тест1');
test2('тест2');
test3('тест3');
test4('тест4');
