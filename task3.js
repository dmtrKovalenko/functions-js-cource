// Task 3

function sequence(start = 0, step = 1) {
  // start - start value for function count
  // step - step for function count
  let isFirstLoad = true;
  let localValue = start;

  return () => {
    if (isFirstLoad) {
      isFirstLoad = false;
      return localValue;
    } else {
      return (localValue += step);
    }
  };
}

const generator = sequence(10, 3);
const generator2 = sequence(7, 1);

console.log(generator());
console.log(generator());

console.log(generator2());
