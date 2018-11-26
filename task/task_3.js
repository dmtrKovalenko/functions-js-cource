function sequence(val1 = 0, val2 = 1) {
  sequence.value = val1;
  const step = val2;
  return function() {
    let takeValue = sequence.value;
    sequence.value = sequence.value + step;
    return takeValue;
  };
}
const generator = sequence(2, 4);
console.log(generator());
console.log(generator());
console.log(generator());
