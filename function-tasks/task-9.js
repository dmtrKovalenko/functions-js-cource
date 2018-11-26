// Переписать функцию из первого задания чтобы она вызывала каждую функцию с аргументом того что вернула предыдущая функция

function compose(...func) {
  func.reverse();
  return arg => {
    return func.reduce(function(accumulator, current) {
      return current(accumulator);
    }, (accumulator = arg));
  };
}

let sum = a => {
  return b => a + b;
};

let mul = a => {
  return b => a * b;
};

const validate = compose(
  mul(10),
  mul(10),
  sum(5)
);

console.log(validate(5)); // (5+5)*10*10 = 1000
