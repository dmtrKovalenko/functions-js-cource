/* var user = {
    name: "John Smith",
    sayHi: function() {
      alert(this.name)
    },
    timeoutSayHi: function() {
      myTimeout(this.sayHi, 1000, this);
    }
};

function myTimeout(func, time, self) {
    let ctx = self;
    setTimeout(func.bind(ctx), time);
}

user.timeoutSayHi(); */

function sayPomidor(number) {
  console.log(`Pomidor number ${number}`);
}

function setMinTime(func, time, ctx, ...args) {
  let isPaused = false;
  const currentValue = args;

  function wrapper() {
    if (isPaused) {
      return;
    }

    func.apply(this, currentValue);

    isPaused = true;
    setTimeout(() => {
      isPaused = false;
      wrapper.apply(ctx, currentValue);
    }, time);
  }
  return wrapper;
}

setInterval(setMinTime(sayPomidor, 2000, this, '4'), 300);
