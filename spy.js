function yourFunc() {
  return "Hello";
}

function makeSpyOn(func) {
  spy.calls = 0;
  function spy() {
    return spy.calls++;
  }
  return spy;
}

const spy = makeSpyOn(yourFunc);

spy();
spy();
console.log(spy.calls);
