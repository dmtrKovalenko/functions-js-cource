function compose(...func) {
  let arr = func.reverse();
  return function(...arg) {
    arr.forEach(elem => elem.apply(this, arg));
  };
}

function hello() {
  console.log("Hello ");
}

function hi() {
  console.log("Hi ");
}

const test = compose(
  hello,
  hi
);
test();
