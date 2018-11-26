// Написать функцию которая принимает функцию и количество миллисекунд и возвращает функцию обертку.
// Каждый раз когда обертка будет вызвана, должна вызываться внутренняя функция,
// НО внутренняя функция не должна быть вызвана чаще чем раз в переданное кол-во миллисекунд.

function wrapper(func, timer) {
	let self = this;
  let timerId;

  return (...args) => {
    if (timerId) {
      return;
		}
		func.apply(self, ...args);
    timerId = setTimeout(() => timerId = 0, timer);
  };
}

let test = wrapper(() => console.log("a"), 1000);
test();
test();
test();
setTimeout(test, 1000);


