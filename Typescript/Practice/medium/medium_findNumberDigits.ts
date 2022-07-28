#!/usr/bin/env npx ts-node

function num_of_digits(num: number): number {
  let digit: number = 0;
  if (num === 0) {
    return digit;
  } else {
    while (true) {
      if (Math.floor(num / (10 ** digit)) !== 0) {
        digit++;
        continue;
      };
      break;
    };
    return digit;
  };
};

console.log(num_of_digits(1000));
console.log(num_of_digits(12));
console.log(num_of_digits(1305981031));
console.log(num_of_digits(0));
