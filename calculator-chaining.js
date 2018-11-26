function Calculator() {
    this.number = 0;

    this.input = (number) => {
        this.number = number;
        return this;
    }

    this.sum = (nextNum) => {
        this.number += nextNum;
        return this;
    }

    this.mul = (nextNum) => {
        this.number *= nextNum;
        return this;
    }

    this.sub = (nextNum) => {
        this.number -= nextNum;
        return this;
    }
}
const calculator = new Calculator();

let result = calculator.input(1).sum(2).mul(3).sub(4).number;
console.log(result);