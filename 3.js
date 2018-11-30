function sequence(num, step) {
    let count = num - step;
    return function () {
        if (step == undefined) {
            step = 1;
        }
        return count += step;
    };
}



