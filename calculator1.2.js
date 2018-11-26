let calculator = {
    value: 0,
    input(number) {
        this.value = number;
        console.log(this.value);
        return this;
    },
    sum(number) {
        this.value += number;
        console.log(this.value);
        return this;
    },
    mul(number) {
        this.value *= number;
        console.log(this.value);
        return this;
    },
    sub(number) {
        this.value = this.value / number;
        console.log(this.value);
        return this;
    }
}

calculator.input(1).mul(3).sub(4).sum(2);