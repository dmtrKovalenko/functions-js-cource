function wrapper(func, delay) {
  executeTime = null;
  checkFunc = 0;
  function schedulerTime() {
    if (executeTime === null || Date.now() - delay > executeTime) {
      setTimeout(func.apply(), delay);
      executeTime = Date.now();
      console.log(++checkFunc);
      clearInterval(this);
    } else {
      clearInterval(this);
      executeTime = Date.now();
      console.log("Proccess doesn't start");
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
