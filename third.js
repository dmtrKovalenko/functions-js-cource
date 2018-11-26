const sequence = (start, seq) => {
  const createGenerator = (start, seq) => {
    function* generateSequence(sum) {
      yield sum + seq;
      yield sum + seq;
    }
    const generator = generateSequence(sum).next().value;
    console.log(generator);
  };
  const sum = (start, seq) => {
    const interval = start + seq;
    sum.calls = interval;
    return interval;
  };
  sum.calls = 0;
};

const test = sequence(() => {});
test(10, 8);
console.log(test);

// вернуть функцию (сумму)
//сделать что бы вернуло первое
//записать это вне замыкания есть
// инкрементировать и отдавать новое
// 5 контекст в примере не передается но его надо передавать
