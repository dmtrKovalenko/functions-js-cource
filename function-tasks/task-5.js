// №5
// Реализовать свою функцию setTimeout которая бы не потеряла контекст вызова

var user = {
  name: "John Smith",
  sayHi: function() {
    console.log(this.name);
  },

  timeoutSayHi: function() {
    myTimeout(this.sayHi, 1000);
  }
};

// Сделать возможность дополнительно передать массив аргументов для вызываемой функции
function myTimeout(func, timer, ...args) {
  setTimeout(func.bind(user, ...args), timer);
}

user.timeoutSayHi();
