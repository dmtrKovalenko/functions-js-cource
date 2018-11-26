const makeSpyOn = yourFunc => {
  const counter = (...args) => {
    counter.calls += 1;
    yourFunc(...args);
  };
  counter.calls = 0;
  return counter;
};

const spy = makeSpyOn(() => {});
spy();
spy();
console.log(spy.calls);
