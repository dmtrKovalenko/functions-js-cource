// №1
// Реализовать композирующую функцию compose которая будет принимать
// неограниченное количество функций и вызывать их справа налево
function compose(...func) {
  func.reverse();
  return (...args) => func.forEach(value => value(...args));
}
// const validator = сompose(isEmail, maxLength(5));

// const isValid = validate(“someemail@emal.com”)



