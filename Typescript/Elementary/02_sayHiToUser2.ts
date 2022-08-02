#!/usr/bin/env npx ts-node

import 'process';

let user_name: string = process.argv.slice(2)[0];

function sayHi (name: string) {
  console.log(`Hello, ${name}.`);
  
};

sayHi(user_name);
