#!/usr/bin/env npx ts-node

import * as readline from 'readline';
import { stdin, stdout } from 'process';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

// let answer: string = await rl.question("What is your name?");

// console.log(answer);



const answer = rl.question('What do you think of Node.js? ');




rl.close();
