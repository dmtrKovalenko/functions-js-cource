let contextBox = function(ctx) {
  return function(fn, delay, ...args) {
    setTimeout(fn.bind(ctx, ...args), delay);
  };
};
let user = {
  name: "John Smith",
  sayHi: function() {
    console.log("Hi,", this.name);
  },
  timeoutSayHi: function() {
    contextBox(this)(this.sayHi, 1000);
  }
};
user.sayHi();
user.timeoutSayHi();
