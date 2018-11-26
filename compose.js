function compose(...funcs) {
  return (args) => {
    funcs.reverse().forEach(func => func(args));
  };
}
const first = (arg) => {
  console.log(arg + 1);
};
const second = (arg) => {
  console.log(arg + 2);
};
const third = (arg) => {
  console.log(arg + 3);
};
const c = compose(
  first,
  second,
  third,
);
c('25');
