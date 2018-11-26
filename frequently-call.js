function frequentlyCall(func, ms) {
  var isStopped = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isStopped) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isStopped = true;

    setTimeout(function() {
      isStopped = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

function log(a) {
  console.log(a);
}

let f = frequentlyCall(log, 1000);
f(1);
f(2);
f(3);
