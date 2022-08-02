#!/usr/bin/env npx ts-node

let user_name: string = process.argv.slice(2)[0];

if (user_name === 'Alice' || user_name === 'Bob') {
  console.log(`Hello, ${user_name}.`);
  
};
