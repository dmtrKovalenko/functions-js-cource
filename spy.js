function makeSpyOn(func) {
  function spy() {
    func();
    return spy.calls++;
  }

  spy.calls = 0;

  return spy;
}

yourFunc = () => 5;

const spy = makeSpyOn(yourFunc);
spy();
spy();

console.log(spy.calls);
