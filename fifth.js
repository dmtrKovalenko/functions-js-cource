const myTimeout = (func, timeout) => {
  setTimeout(func, timeout);
};

const user = {
  name: "John Smith",
  sayHi(args) {
    console.log(args);
    alert(this.name);
  },
  timeoutSayHi() {
    myTimeout(this.sayHi.bind(this, [1]), 1000);
  }
};

console.log(user.timeoutSayHi());
