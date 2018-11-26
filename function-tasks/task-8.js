//Написать свою систему модулей которая позволит инкапсулировать локальное состояние.

const modules = new Map();


const module = createModule("module", () => {
  return {
    sayHi: () => alert("HI")
  };
});

const anotherModule = createModule("newModule", () => {
  const myFirstModule = require("module");
});

function createModule(name, callback) {
  let result = callback();
  module.set(name, result);
  return result;
}

function require(name) {
  if (module.has(name)) {
    return module.get(name)
  }

  return `Module ${name} not found`
}
