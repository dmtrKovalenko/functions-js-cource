
function makeSpyOn(func) {
    function spy() {
        func();
        spy.count++;
        return spy.count;
    }
    spy.count = 0;
    return spy;
}

function notSpy(){
    console.log("Not a spy!");
}

const spy = makeSpyOn(notSpy);

spy();
spy();

console.log(spy.count);
