function сompose(...func) {
	return args => {func.reverse().forEach(func => {
      func(args);
    });
  };
}