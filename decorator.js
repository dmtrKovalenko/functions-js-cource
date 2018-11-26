function miliDecorator(func, delay) {
  let time = null;

  return function() {
    if ((time = null || Date.now() - time >= delay)) {
      func();
      time = Date.now();
    } else {
      console.log("nope");
      time = Date.now();
    }
  };
}

let tst = miliDecorator(hi, 1500);
setInterval(tst, 500);

function miliDecorator(func, delay) {
  let time = null;

  return function() {
    if ((time = null || Date.now() - time === delay)) {
      func();
      time = Date.now();
    } else {
      console.log("nope");
      time = Date.now();
    }
  };
}

let tst = miliDecorator(hi, 1500);
setInterval(tst, 500);
