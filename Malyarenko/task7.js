function applier(fn, interval) {
  let lastTime = null;
  function timeControll() {
    if ((lastTime === null) | (Date.now() - interval <= lastTime)) {
      fn();
      lastTime = Date.now();
    } else {
      clearInterval(this);
    }
  }
  return timeControll;
}

function sayHello() {
  console.log("Say hello to my little friend!!!!!!!!!!!!!!!!");
}

let test = applier(sayHello, 1000);

setInterval(test, 1100);
