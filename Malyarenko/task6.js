function applier(fn, interval) {
  let id = null;
  function timeControll(args) {
    if (id) {
      return;
    }
    fn.call(this, args);
    id = setTimeout(() => (id = null), interval);
  }
  return timeControll;
}

function sayHello(name) {
  console.log("Hello,", name);
}

let test = applier(sayHello, 999);

setInterval(test, 500, "John");
