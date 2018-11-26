function miliDecorator(func, delay) {
  let time = null;

  return function(...arg) {
    if ((time = null || Date.now() - time >= delay)) {
      func.apply(this, arg);
      time = Date.now();
    } else {
      console.log("nope");
      time = Date.now();
    }
  };
}

function decorator(func, delay) {
  let id = null;
  function timer(...arg) {
    if (id) {
      id = setTimeout(() => (id = null), delay);
      return;
    }
    func.apply(this, arg);
    id = setTimeout(() => (id = null), delay);
  }
  return timer;
}

let tst = decorator(hi, 1500);
setInterval(tst, 500);

function hi() {
  console.log("Hi ");
}
