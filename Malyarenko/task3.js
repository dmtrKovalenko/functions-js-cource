function sequence(start = 0, step = 1) {
  let counter = start - step;

  function sequenceGenerator() {
    return (counter += step);
  }

  return sequenceGenerator;
}

const generator = sequence(10, 3);
const generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16
