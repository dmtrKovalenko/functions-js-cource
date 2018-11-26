function сompose(...func) {
	return args => {func.reverse().forEach(func => {
      func(args);
    });
  };
}




/***************** 2 ****************** */


function makeSpyOn() {
	let count = 1;
	return function() {
		return count++
		}
		console.log("Вызов: " + count)
	}

const spy = makeSpyOn() 

console.log(spy());
console.log(spy());

/* ********************* 3 ***********/

function sequence(val1 = 0, val2 = 1) {
  sequence.value = val1;
  const step = val2;
  return function() {
    let takeValue = sequence.value;
    sequence.value = sequence.value + step;
    return takeValue;
  };
}
 const generator = sequence(2, 4);
console.log(generator());
console.log(generator());
console.log(generator());


/******* 4 Calculator 1 ********* */

function Calculator() {

  this.input = function() {
    this.num1 = +prompt('num1:', 0);
    this.num2 = +prompt('num2:', 0);
  };
  this.sum = function() {
    return this.num1 + this.num2;
  };
  this.mul = function() {
    return this.num1 * this.num2;
	};
	this.sub = function() {
		return this.num1 - this.num2
	}
}

let calculator = new Calculator();
calculator.input();
console.log("Сумма: " + calculator.sum());
console.log("Умножение: " + calculator.mul());
console.log("Вычитание: " + calculator.sub());
//****    Calculator 2 ******//
function Calculator2() {
	return {
			input: function (num1){
			return {
				sum: function (num2) {
					num1 += num2;
					console.log(num1);
					return this;
				},
				mul: function (num2) {
					num1 *= num2;
					console.log(num1);
					return this;
				},
				sub: function (num2) {
					num1 -= num2;
					console.log(num1);
					return this;
				},
				result: function () {
					return num1;
				}
			}
		}
	}	
}

let calculator2 = new Calculator2();
console.log(calculator2.input(5).sum(5).mul(2).sub(11).result());