var contextCatcher = function(ctx) {
  return function(fn, delay, ...args) {
    setTimeout(fn.bind(ctx, ...args), delay);
  };
};

var user = {
  name: "John Smith",
  sayHi: function() {
    console.log("Hi,", this.name);
  },
  timeoutSayHi: function() {
    contextCatcher(this)(this.sayHi, 1000);
  }
};

user.sayHi();
user.timeoutSayHi();
