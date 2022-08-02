#!/usr/bin/env npx ts-node

let num: number = Number(process.argv.slice(2)[0]);
let mode: string = process.argv.slice(2)[1];

function customizeCal (num:number, mode: string): number {
  let result: number = 1;
  if (mode === 'sum') {
    for (let i = 2; i <= num; i++) {
      result += i;
    };
  } else {
    for (let i = 1; i <= num; i++) {
      result *= i;
    };
  };
  return result;
};

console.log(customizeCal(num, mode));

