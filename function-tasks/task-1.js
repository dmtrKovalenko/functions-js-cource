// №1
// Реализовать композирующую функцию compose которая будет принимать
// неограниченное количество функций и вызывать их справа налево

// Проверка на валидность emaila
function isEmail(email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(email) ? email : alert("Введите корректный e-mail");
}

// Показать указанное количество символов
function maxLength(showSimbols) {
  return email => `${email.slice(0, showSimbols)}...`;
}

// Реализованная функция
function compose(...func) {
  func.reverse();
  return (...args) =>
    func.forEach(value => {
      console.log(value(...args)); // Для проверки
      return value(...args);
    });
}

const validate = compose(
  isEmail,
  maxLength(5)
);

const isValid = validate("someemail@emal.com");
