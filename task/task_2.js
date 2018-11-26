// function makeSpyOn() {
// 	let count = 1;
// 	return function() {
// 		return count++
// 		}
// 		spy.calls {

// 		}
// 		console.log("Вызов: " + count)
// 	}

// const spy = makeSpyOn() 

// console.log(spy());
// console.log(spy());
// //
// function makeSpyOn(func) {
//   function spy() {
//     func();
//     return spy.calls++;
//   }
//   spy.calls = 0;
//   return spy;
// }
//  function func1() {
//   console.log(1);
// }
//  const spy = makeSpyOn(func1);
// spy();
// spy();
// console.log(spy.calls);