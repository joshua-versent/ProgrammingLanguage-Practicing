#!/usr/bin/env npx ts-node

function concat(...args: Array<number>[]) {
  let result: number[] = [];
  for (let arr of args) {
    result = result.concat(arr);
  };
  return result;
};


console.log(concat([1, 2, 3], [4, 5], [6, 7]));
console.log(concat([1], [2], [3], [4], [5], [6], [7]));
console.log(concat([1, 2], [3, 4]));
console.log(concat([4, 4, 4, 4, 4]));
