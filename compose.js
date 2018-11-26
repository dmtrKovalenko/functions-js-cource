function compose(...functions) {
    
    return (...args) => functions.reverse().forEach(func => {func(args);
    });
}

function test1() {
    console.log("test1");
}
function test2() {
    console.log("test2");
}
function test3() {
    console.log("test3");
}
let gf = compose(test1, test2, test3);

gf();
