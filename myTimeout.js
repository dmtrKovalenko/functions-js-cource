var user = {
  name: "John Smith",
  sayHi: function() {
    console.log(this.name);
  },
  timeoutSayHi: function() {
    myTimeout(this, this.sayHi, 1000);
  }
};

function myTimeout(self, func, delay, ...args) {
  let start = Date.now();
  while (Date.now() - start <= delay) {
    if (Date.now() - start === delay) {
      return func.apply(self, args);
    }
    continue;
  }
}
user.timeoutSayHi();
