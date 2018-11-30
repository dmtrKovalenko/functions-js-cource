const moduleList = new Map();
const createModule = function(moduleName, callback) {
  moduleList.set(moduleName, callback());
};
const myRequire = function(moduleName) {
  return moduleList.get(moduleName);
};

createModule("module", () => {
  return {
    sayHi: function() {
      console.log("HI");
    },
    square: function(x) {
      return Math.pow(x, 2);
    }
  };
});

createModule("newModule", () => {
  const myFirstModule = myRequire("module");
  console.log(myFirstModule.square(4));
  myFirstModule.sayHi();
});
