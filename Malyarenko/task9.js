function sayA(arg = "default arg") {
  return "A " + arg;
}

function sayB(arg = "default arg") {
  return "B " + arg;
}

function sayC(arg = "default arg") {
  return "C " + arg;
}

function sayD(arg = "default arg") {
  return "D " + arg;
}

function composeCustom(...functions) {
  return function(...args) {
    console.log(
      functions.reverse().reduce((prevVal, currVal) => {
        return prevVal + currVal.call(this, prevVal);
      }, functions[0](...args))
    );
  };
}

const validate = composeCustom(sayD, sayC, sayB, sayA);
const isValid = validate("\n");
