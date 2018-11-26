//Task 2

function makeSpyOn(func) {
  function spy() {
    func();
    return spy.calls++;
  }
  spy.calls = 0;
  return spy;
}

function func1() {
  console.log(1);
}

const spy = makeSpyOn(func1);
spy();
spy();
console.log(spy.calls);
