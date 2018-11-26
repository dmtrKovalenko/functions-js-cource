const list = new Map();
const createModule = function(name, func) {
  list.set(name, func());
};

const myRequire = function(name) {
  return list.get(name);
};

createModule("myModule", () => {
  return {
    sayHi: function() {
      console.log("HI");
    }
  };
});

createModule("newModule", () => {
  const myFirstModule = myRequire("myModule");
  myFirstModule.sayHi();
});
