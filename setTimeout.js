var user = {
    name: "John Smith",
    sayHi: function () {
        alert(this.name);
    },
    timeoutSayHi: function () {
        myTimeout(this.sayHi, 1000, 'hghggh');
    }
};

function myTimeout(func, interval) {
    setTimeout(() => {
        func.apply(user);
        console.log(arguments);
    }, interval);
}