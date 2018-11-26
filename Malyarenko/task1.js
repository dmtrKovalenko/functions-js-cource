function sayWorld(text) {
  console.log("World", text);
}

function sayHello(name) {
  console.log("Hello", name);
}

function composeCustom(...functions) {
  return function(...arg) {
    for (let func of functions.reverse()) {
      func(...arg);
    }
  };
}

const validate = composeCustom(sayWorld, sayHello);
const isValid = validate("Vasya");
