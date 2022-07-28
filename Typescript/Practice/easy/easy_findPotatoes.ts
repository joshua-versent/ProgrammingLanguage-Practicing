#!/usr/bin/env npx ts-node

function potatoes (letters: string): number {
  let counter: number = 0;
  for (let i = 0; i <= letters.length - 6; i++) {
    if (letters.slice(i, i+6) === 'potato') {
      counter++
    };
  };
  return counter;
};


console.log(potatoes("potato"));
console.log(potatoes("potatopotato"));
console.log(potatoes("potatoapple"));
