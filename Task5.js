/// Task 5 (Unfinished)
var user = {
  name: "John Smith",
  sayHi: function() {
    alert(this.name);
  },
  timeoutSayHi: function() {
    myTimeout(this)(this.sayHi, 1000);
  },
};

function myTimeout(func, delay, ...args) {
  return () => {
    setTimeout(ctx => {
      func.bind(ctx, ...args);
    }, delay);
  };
}
