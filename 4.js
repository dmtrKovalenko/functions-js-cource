let calc = {
    input: function () {
        this.a = parseInt(prompt("Enter your number:"));
        this.b = parseInt(prompt("Enter your number:"));
        return this;
    },
    sum: function () {
        return (this.value = this.a + this.b);
    },
    mul: function () {
        return (this.value = this.a * this.b);
    },
    sub: function () {
        return (this.value = this.a - this.b);
    },
};



let calc = {
    input: function (inputVal) {
        this.result = inputVal;
        return this;
    },
    sum: function (sumVal) {
        this.result += sumVal;
        return this;
    },
    mul: function (mulVal) {
        this.result *= mulVal;
        return this;
    },
    sub: function (subVal) {
        this.result -= subVal;
        return this;
    },
};
