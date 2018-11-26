function wrapper(func, interval) {
  let prevTime = null;
  function fixedTime() {
    if ((prevTime === null) | (Date.now() - interval >= prevTime)) {
      func();
      prevTime = Date.now();
    } else {
      clearInterval(this);
    }
  }
  return fixedTime;
}
function write() {
  console.log("Don`t stop write!");
}
let go = wrapper(write, 1000);
setInterval(go, 500);
