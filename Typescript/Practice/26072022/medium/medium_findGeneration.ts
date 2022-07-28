#!/usr/bin/env npx ts-node

function generation (num: number, str: string) {
  let genMale: { [key: number]: string } = {
    '-3': 'great grandfather',
    '-2': 'grandfather',
    '-1': 'father',
    0: 'me!',
    1: 'son',
    2: 'grandson',
    3: 'great grandson'
  };

  let genFemale: { [key: number]: string } = {
    '-3': 'great grandmother',
    '-2': 'grandmother',
    '-1': 'mother',
    0: 'me!',
    1: 'daughter',
    2: 'granddaughter',
    3: 'great granddaughter'
  };

  if (str === 'm') {
    return genMale[num];
  } else {
    return genFemale[num];
  };
};

console.log(generation(2, "f"));
console.log(generation(-3, "m"));
console.log(generation(1, "f"));
