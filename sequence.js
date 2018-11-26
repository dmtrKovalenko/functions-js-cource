function sequence(start = 0, step = 1) {
  let str = start;
  let stp = step;
  str -= stp;
  return function() {
    str += stp;
    return str;
  };
}

const generator = sequence(10, 3);
const generator2 = sequence(7, 1);
console.log(generator2());
console.log(generator2());
