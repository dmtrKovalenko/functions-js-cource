function makeSpyOn(func) {
  count.calls = 0;

  function count() {
    ++count.calls;
    return func();
  }

  return count;
}

const spy = makeSpyOn(hello);
spy();
spy();
console.log(spy.calls);
