#!/usr/bin/env npx ts-node

function perimeter (l: string, num: number): number {
  let result = (l === 's') ? (4 * num) : (6.28 * num);
  return result
};

console.log(perimeter("s", 7));
console.log(perimeter("c", 4));
console.log(perimeter("c", 9));
