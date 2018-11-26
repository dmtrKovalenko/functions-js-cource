function sequence(start = 0, step = 1) {   
    let count = 0;
    seq.currentValue = 0;
    function seq() {
        if(count === 0) {
            currentValue = start;
            count++;
            return currentValue;
        } else {
        currentValue += step;
        return currentValue;
        }
    }
    return seq;
}
 
const generator = sequence(10, 3);
const generator2 = sequence(7, 1);


console.log(generator()); // 10
console.log(generator()); // 13
 
console.log(generator2()); // 7
 
console.log(generator()); // 16
 
console.log(generator2()); // 8
