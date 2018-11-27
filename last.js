const сompose = (...args) => data => {
  let prevRes = "START";
  for (let i = args.length; i > 0; i--) {
    prevRes = args[i - 1](prevRes === "START" ? data : prevRes);
  }
  return prevRes;
};
function isEmail(slice) {
  return slice[1].toUpperCase();
}
function maxLength(num) {
  return email => {
    return email.slice(0, 4);
  };
}

const validate = сompose(isEmail, maxLength(5));
const symbol = validate("someemail@emal.com");
console.log(symbol); // O
