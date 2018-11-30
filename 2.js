function makeSpyOn(func) {
  function spy() {
    func();
    return spy.calls++;
  }
  spy.calls = 0;
  return spy;
}



