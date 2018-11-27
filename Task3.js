function sequence(param1 = 0, param2 = 1) {
  let value = param1;
  const step = param2;
  return function() {
    let outputValue = value;
    value = value + step;
    return outputValue;
  };
}

const generator = sequence(2, 4);

const generator1 = sequence(5, 3);
console.log(generator());
console.log(generator1());
console.log(generator1());
console.log(generator());
