//   Реализовать функцию шпиона которая будет сохранять количество вызовов функции  
function makeSpyOn(f) {
    counter.calls = 0;
    function counter() {
        counter.calls++;
        f();
    }
    return counter;
}
function c(msg = new Date().toLocaleString()) {
    console.log(msg);
}
const spy = makeSpyOn(c)
spy()
spy()
console.log(spy.calls) // 2