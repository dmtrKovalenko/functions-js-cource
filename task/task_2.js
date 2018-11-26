function makeSpyOn(myFunc1) {
  function spy() {
    myFunc1();
    return spy.calls++;
  }
  spy.calls = 0;
  return spy;
}
function myFunc2() {
  console.log("tet text");
}
const spy = makeSpyOn(myFunc2);
spy();
spy();
spy();
spy();
console.log(spy.calls);
