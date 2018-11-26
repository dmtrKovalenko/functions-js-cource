function sequence(start = 0, step = 1) {
    function generate() {
      if (!generate.launch) {
        generate.launch++;
        return generate.start;
      } else {
        generate.start += step;
        return generate.start;
      }
    }
  
    generate.launch = 0;
    generate.start = start;
  
    return generate;
  }
  
  const generator = sequence(10, 3);
  const generator2 = sequence(7, 1);
  
  console.log(generator()); // 10
  console.log(generator()); // 13
  
  console.log(generator2()); // 7
  
  console.log(generator()); // 16
  
  console.log(generator2()); // 8
  