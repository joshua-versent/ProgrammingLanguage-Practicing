#!/usr/bin/env npx ts-node

function canNest(arr1: Array<number>, arr2: Array<number>): boolean {
  if (Math.min(...arr1) > Math.min(...arr2) && 
  Math.max(...arr1) < Math.max(...arr2)) {
    return true
  } else {
    return false
  };
};

console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));
