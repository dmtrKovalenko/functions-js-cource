//   Реализовать композирующую функцию compose которая будет принимать неограниченное количество функций и вызывать их справа налево
function compose(...functionsArray) {
    return (arg) => functionsArray.reduceRight( (temp,f) => { f(arg) }, 0);
}
//   const validator = сompose(isEmail, maxLength(5));
//   const isValid = validate(“someemail@emal.com”)


function c( msg = new Date().toLocaleString() ){
    console.log(msg);
  }

let foo = compose(c,c,c);
foo('Same argument everywhere');


// Переписать функцию из первого задания чтобы она вызывала каждую функцию с аргументом того что вернула предыдущая функция
function compose2(...functionsArray) {
    return (argStart) => functionsArray.reduceRight( (argNext,f) => { return f(argNext) }, argStart);
}

let foo2 = compose2(c,c,c);
foo2('First argument');