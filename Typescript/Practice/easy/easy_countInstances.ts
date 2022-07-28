#!/usr/bin/env npx ts-node

function charCount (str1: string, str2: string): number {
  let counter: number = 0;
  for (let char of str2) {
    if (str1 === char) {
      counter++
    };
  };
  return counter;
};

console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));

