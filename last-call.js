function lastCallFunction(func, ms) {
  let lastCall = 0;
  let now;
  return function() {
    now = Date.now();
    if (now > lastCall + ms) {
      lastCall = now;
      func.apply(this);
    }
  };
}

function log() {
  console.log(5);
}

let f = lastCallFunction(log, 1000);
f();
f();
f();
f();
setTimeout(f, 2000);
setTimeout(f, 4000);