function sequence(valueOne = 0, valueTwo = 1) {
  sequence.value = valueOne;
  const step = valueTwo;
  return function() {
    let res = sequence.value;
    sequence.value += step;
    return res;
  };
}

const generator = sequence(5, 2);

console.log(generator());
console.log(generator());
console.log(generator());
