// Task 1
// Temp functions for test
function isEmail(someString) {
  return console.log(someString);
}

function maxLength(someValue) {
  return console.log(someValue);
}

// Answer for task 1
function compose(...functions) {
  return () => {
    functions.reverse().forEach((funcElement) => {
      call(funcElement);
    });
  };
}

const composeSetUp = compose(
  isEmail('test1'),
  maxLength(5),
  maxLength(4),
  maxLength(3),
);
