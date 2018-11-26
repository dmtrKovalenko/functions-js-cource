function sayHi() {
  console.log("Hi");
}

function makeSpyOn(yourFunc) {
  counter.calls = 0;
  function counter() {
    ++counter.calls;
    yourFunc();
  }

  return counter;
}

const spy = makeSpyOn(sayHi);
spy();
spy();

console.log(spy.calls);
