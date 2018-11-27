function wrapper(func, delay) {
  executeTime = null;
  function schedulerTime() {
    if (executeTime === null || Date.now() - delay > executeTime) {
      func.apply();
      executeTime = Date.now();
    } else {
      clearInterval(this);
      console.log("Proccess skipped");
    }
  }
  return schedulerTime;
}

function sayHi() {
  let hi = "hi";
  console.log(hi);
}

const fn = wrapper(sayHi, 1000);

setInterval(fn, 50);
