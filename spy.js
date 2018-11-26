function makeSpyOn() {

    counter.calls = 0;

    function counter() {
        return counter.calls++;
    }
return counter;
}
function test(){}

const spy = makeSpyOn(test) 
spy()
spy()
console.log(spy.calls)