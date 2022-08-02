#!/usr/bin/env npx ts-node

let num: number = Number(process.argv.slice(2)[0]);

function findPrime (num: number) {
  let arr: number[] = [];
  for (let i = 2; i <= num; i++) {
    let isPrime: boolean = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      };
    };
    if (isPrime) {
      arr.push(i);
    };
  };
  return arr;
};

console.log(findPrime(num));
