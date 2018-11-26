//   Реализовать свою функцию setTimeout которая бы не потеряла контекст вызова 
var user = {
    name: "John Smith",
    sayHi: function () {
        console.log(this.name)
    },
    timeoutSayHi: function () {
        setTimeout(this.sayHi.call(this), 1000);
    }
};
user.timeoutSayHi();

//   Сделать возможность дополнительно передать массив аргументов для вызываемой функции
var user2 = {
    name: "John Smith",
    sayHi: function (msg = this.name) {
        console.log(msg)
    },
    timeoutSayHi: function (...args) {
        myTimeout(this, this.sayHi, args, 1000);
    }
};
function myTimeout(context, f, args, delay) {
    setTimeout(f.apply(context, args), delay);
}

user2.timeoutSayHi("Hello!");

//   Написать функцию которая принимает функцию и количество миллисекунд и возвращает функцию обертку. Каждый раз когда обертка будет вызвана, 
//   должна вызываться внутренняя функция, НО внутренняя функция не должна быть вызвана чаще чем раз в переданное кол-во миллисекунд.
function myTimeoutWrapper(f, delay) {
    let timerId;
    return function () {
        clearTimeout(timerId);
        timerId = setTimeout(f, delay);
    }
}
function c(msg = new Date().toLocaleString()) {
    console.log(msg);
}
let timer1 = myTimeoutWrapper(c, 500);
timer1();
timer1();
timer1();

//   Написать функцию которая принимает функцию и количество миллисекунд и возвращает функцию обертку. Каждый раз когда обертка будет вызвана, 
//   должна вызываться внутренняя функция, НО внутренняя функция не должна быть вызвана если с момента предыдущего вызова не прошло заданное кол-во миллисекунд.
function myTimeoutWrapper2(f, delay) {
    let timerId = null;
    return function () {
        if (timerId === null) {
            timerId = setTimeout(() => { f(); timerId = null; }, delay);
        }
    }
}
let timer2 = myTimeoutWrapper2(c, 500);
timer2();
timer2();
timer2();

