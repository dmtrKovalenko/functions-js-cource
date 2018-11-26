const sequence = (start, step) => {
  function* generate(start = 0, step = 1) {
    while (true) {
      yield start;
      start += step;
    }
  }
  const generator = generate(start, step);
  return () => generator.next().value;
};

const test = sequence(10, 8);
test();
test();
console.log(test());

// 5 контекст в примере не передается но его надо передавать
