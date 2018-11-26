// Написать свою систему модулей которая позволит инкапсулировать локальное состояние.

const module = createModule("module", () => {
  return {
    sayHi: () => alert("HI")
  };
});

const anotherModule = createModule("newModule", () => {
  const myFirstModule = require("module");
});
