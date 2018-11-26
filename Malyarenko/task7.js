function applier(fn, interval) {
  let id = null;
  function timeControll(args) {
    if (id) {
      id = setTimeout(() => (id = null), interval);
      return;
    }
    fn.call(this, args);
  }
  return timeControll;
}

function sayHello() {
  console.log("Say hello to my little friend!!!!!!!!!!!!!!!!");
}

let test = applier(sayHello, 1000);

setInterval(test, 1100);
