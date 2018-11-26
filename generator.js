function sequence(start = 0, step = 1) {
    let value = start;
    return () => {
        let returnValue = value;
        value += step;
        return returnValue;
    }
}

const generator = sequence(10, 3);
const generator2 = sequence(1, 3);

console.log(generator()); 
console.log(generator()); 
console.log(generator2()); 
console.log(generator2()); 