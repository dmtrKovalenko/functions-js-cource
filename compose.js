
function compose(...funcs) {
    return  args => {
        funcs.reverse().forEach(func => 
            func(args))
    }
}
const first = function(arg) {
    console.log(arg + 1);
}

const second = function(arg) {
    console.log(arg + 2);
}

const third = function(arg) {
    console.log(arg + 3);
}

let c = compose(
    first,
    second,
    third
)

c("25");