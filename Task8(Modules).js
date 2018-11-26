/// Task 8 (Unfinished)

modulesLibrary = new Map();
function createModule(name, body) {
  modulesLibrary.set("name", body());
}
function require(moduleName) {
  return modulesLibrary.get(moduleName);
}
const module = createModule("module", () => {
  return {
    sayHi: () => alert("HI"),
  };
});

const anotherModule = createModule("newModule", () => {
  const myFirstModule = require("module");
});
