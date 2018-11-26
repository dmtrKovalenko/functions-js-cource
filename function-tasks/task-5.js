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

// Написать функцию которая принимает функцию и количество миллисекунд и возвращает функцию обертку.
// Каждый раз когда обертка будет вызвана, должна вызываться внутренняя функция,
// НО внутренняя функция не должна быть вызвана чаще чем раз в переданное кол-во миллисекунд.

// Написать функцию которая принимает функцию и количество миллисекунд и возвращает функцию обертку.
// Каждый раз когда обертка будет вызвана, должна вызываться внутренняя функция, НО внутренняя функция
// не должна быть вызвана если с момента предыдущего вызова не прошло заданное кол-во миллисекунд.

function wrapper(func, timer, ...args) {
	// внутренняя функции
	function sumFunc() {
		console.log("a");
	}
	sumFunc.isActive = true;

  return function () {
		if (sumFunc.isActive) {
			sumFunc();
			sumFunc.isActive = false;
			setTimeout(() => sumFunc.isActive = true, timer)
		}
  	func()
	}
}

let test = wrapper(user.timeoutSayHi, 1000);
test();
