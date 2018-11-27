// Task 7
const currentDate = arguments;

function delay(func, timeout) {
  const startDate = new Date();
  return () => {
    const localThis = this;
    const localArgs = arguments;
    const userDate = new Date();

    console.log(startDate);

    if (userDate - startDate > 300) {
      setTimeout(() => {
        func.apply(savedThis, savedArgs);
      }, timeout);
    }
  };
}

function func(x) {
  console.log(x);
}

console.log(delay(func('Test1'), 300));
