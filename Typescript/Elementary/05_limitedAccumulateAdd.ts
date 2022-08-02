#!/usr/bin/env npx ts-node

let num: number = Number(process.argv.slice(2)[0]);

function limitedAcc (num: number): number {
  let result: number = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    };
  };
  return result;
};

console.log(limitedAcc(num));
