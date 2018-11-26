//Написать свою систему модулей которая позволит инкапсулировать локальное состояние.

const modulesLibrary = new Map();

function createModule(name, callback) {
  const result = callback();
  modulesLibrary.set(name, result);
  return result;
}

function require(name) {
  if (modulesLibrary.has(name)) {
    return modulesLibrary.get(name);
  }

  return `Module ${name} not found`;
}

// Вызов
const newModule = createModule("module", () => {
  return {
    sayHi: () => alert("HI")
  };
});

const anotherModule = createModule("newModule", () => {
  const myFirstModule = require("module");
  return myFirstModule; // для проверки
});

console.log(newModule);
console.log(anotherModule);
