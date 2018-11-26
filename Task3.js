function sequence(param1 = 0, param2 = 1) {
  sequence.value = param1;
  const step = param2;
  return function() {
    let outputValue = sequence.value;
    sequence.value = sequence.value + step;
    return outputValue;
  };
}

const generator = sequence(2, 4);

console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
