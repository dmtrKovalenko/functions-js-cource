//Task 1

function compose(...list) {
  return args => {
    list.reverse().forEach(func => {
      func(args);
    });
  };
}

const func1 = function(args) {
  console.log(args + 1);
};

const func2 = function(args) {
  console.log(args + 2);
};

const func3 = function(args) {
  console.log(args + 3);
};

const c = compose(
  func1,
  func2,
  func3
);

c(24);
