function compose(...functions) {
    return (args) => {
        let revertedFunctions = [...functions].reverse();
        revertedFunctions.forEach(func => {
            func(args);
        });
    }
}

let first = (str) => console.log(str);
let second = () => console.log('second');
let third = () => console.log('third');

let c = compose(first, second, third);
c('dfghdhs');