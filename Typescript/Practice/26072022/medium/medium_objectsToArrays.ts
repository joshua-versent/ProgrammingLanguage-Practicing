#!/usr/bin/env npx ts-node

function toArray (obj: { [key: string]: number }) {
  type array1 = (string|number)[];
  let arr: Array<array1> = [];
  for (let [key, value] of Object.entries(obj)) {
    arr.push([key, value]);
  };
  return arr;
};

console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));

