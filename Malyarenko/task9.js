function sayA(arg = "default arg") {
  return arg + "A";
}

function sayB(arg = "default arg") {
  return arg + "B";
}

function sayC(arg = "default arg") {
  return arg + "C";
}

function sayD(arg = "default arg") {
  return arg + "D";
}

function composeCustom(...functions) {
  let fn = functions[functions.length - 1];
  functions.pop();
  return function(...args) {
    console.log(
      functions.reverse().reduce((prevVal, currVal) => {
        return prevVal + currVal(prevVal);
      }, fn(...args))
    );
  };
}

const validate = composeCustom(sayD, sayC, sayB, sayA);
const isValid = validate(".");
