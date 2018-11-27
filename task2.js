// Task 2
function makeSpyOn(tempFunction) {
  function spy() {
    tempFunction();
    return spy.calls++;
  }
  spy.calls = 0;
  return spy;
}

function myFunc() {
  console.log('Hello world');
}

const spy = makeSpyOn(myFunc);

spy();
spy();
spy();

console.log(spy.calls);
