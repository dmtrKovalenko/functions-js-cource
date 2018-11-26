// Написать функцию которая принимает функцию и количество миллисекунд и возвращает функцию обертку.
// Каждый раз когда обертка будет вызвана, должна вызываться внутренняя функция,
// НО внутренняя функция не должна быть вызвана если с момента предыдущего вызова не прошло заданное кол-во миллисекунд.

function wrapper(func, delay) {
  let self = this;
  let timerId;

  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
      timerId = setTimeout(() => (timerId = 0), delay);
      return;
    }
    func.apply(self, ...args);
    timerId = setTimeout(() => (timerId = 0), delay);
  };
}

let test = wrapper(() => console.log("a"), 1000);
setTimeout(test, 400);
setTimeout(test, 600);
setTimeout(test, 1650);
