/// Task 8

modulesLibrary = new Map();
function createModule(name, body) {
  modulesLibrary.set(`${name}`, body());
}
function require(moduleName) {
  return modulesLibrary.get(moduleName);
}
const moduleInstance = createModule("module", () => {
  return {
    sayHi: () => console.log("hi"),
  };
});

const anotherModule = createModule("newModule", () => {
  const myFirstModule = require("module");
  myFirstModule.sayHi();
});
