#!/usr/bin/env npx ts-node

function filterArray (arr: Array<string | number>) {
  let arr2 = new Array();
  for (let i of arr) {
    if (typeof i !== 'string') {
      arr2.push(i);
    };
  };
  return arr2;
};

console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));
