const сompose = (...args) => data => {
  for (let i = args.length; i > 0; i--) {
    const res = args[i - 1](data);
    if (!res) return false;
  }
  return true;
};
function isEmail() {
  return true;
}
function maxLength(num) {
  return () => {
    return true;
  };
}

const validate = сompose(isEmail, maxLength(5));
const isValid = validate("someemail@emal.com");
console.log(isValid);
