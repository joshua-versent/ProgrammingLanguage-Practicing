#!/usr/bin/env npx ts-node

function possibleBonus (pos1: number, pos2:number): boolean {
  let result: boolean = false;
  if (pos1 < pos2) {
    if (pos2 - pos1 <= 6) {
      result = true;
    };
  };
  return result
}

console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));
