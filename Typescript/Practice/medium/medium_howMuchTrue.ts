#!/usr/bin/env npx ts-node

function countTrue (arr: Array<boolean>): number {
  let num: number = 0;
  for (let i of arr) {
    if (i === true) {
      num++
    };
  };
  return num;
};

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));


