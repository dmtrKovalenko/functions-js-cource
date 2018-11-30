function applier(fn, interval) {
  let id = null;
  let now;
  function timeControll(args) {
    now = Date.now();
    if (id) {
      id = setTimeout(() => (id = null), interval);
      return;
    }
    console.log();

    fn.call(this, args);
  }
  return timeControll;
}

function sayHello() {
  console.log("Say hello to my little friend!!!!!!!!!!!!!!!!");
}

let test = applier(sayHello, 1000);

setInterval(test, 1100);
