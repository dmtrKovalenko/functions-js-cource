function debounce(func, timeout) {
  let isTimeout = true;
  return () => {
    if (isTimeout) {
      isTimeout = false;
      func();
    }
    setTimeout(() => {
      isTimeout = true;
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
