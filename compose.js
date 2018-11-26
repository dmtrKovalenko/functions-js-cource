function compose(...func) {
  let arr = func.reverse();
  return function(...arg) {
    arr.forEach(elem => elem.apply(this, arg));
  };
}

function hello() {
  console.log("Hello");
}

function hi(ar) {
  console.log("Hi " + ar);
}

const test = compose(
  hello,
  hi
);
test(5);
