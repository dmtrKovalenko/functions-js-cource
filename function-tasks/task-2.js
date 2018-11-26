// №2
// Реализовать функцию шпиона которая будет сохранять количество вызовов функции
function yourFunc() {
  console.log("a");
}
function makeSpyOn(func) {
  function counter() {
    func();
    return counter.calls++;
  }
  counter.calls = 0;
  return counter;
}
const spy = makeSpyOn(yourFunc);
spy();
spy();

console.log(spy.calls); // 2
