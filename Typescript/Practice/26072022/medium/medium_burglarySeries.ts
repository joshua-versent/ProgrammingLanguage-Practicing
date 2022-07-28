#!/usr/bin/env npx ts-node

function addName (obj: {[key: string]: number}, str: string, num: number): {[key: string]: number} {
  obj[str] = num;
  return obj;
};

console.log(addName({}, "Brutus", 300));
console.log(addName({ piano: 500 }, "Brutus", 400));
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));
