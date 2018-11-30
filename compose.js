// Реализовать композирующую функцию compose которая будет принимать неограниченное количество функций и вызывать их справа налево

function hello(name) {
  console.log("Hello, " + name);
}

function hi(hi) {
  console.log("Hi, " + hi);
}

function compose(...functions) {
  return args => {
    functions.reverse().forEach(funcs => {
      funcs(args);
    });
  };
}

var validate = compose(
  hello,
  hi
);

var isValid = validate("World");
