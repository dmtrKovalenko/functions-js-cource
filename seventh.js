function debounce(func, timeout) {
  let timeoutID;
  return () => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      func();
    }, timeout);
  };
}

const func = debounce(() => {
  console.log("called");
}, 1000);

func();
func();
func();

setTimeout(() => {
  func();
}, 1000);
