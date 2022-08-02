#!/usr/bin/env npx ts-node

let num: number = Number(process.argv.slice(2)[0]);

function accu (num: number): number {
  let result: number = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  };
  return result;
};

console.log(accu(num));

