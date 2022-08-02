#!/usr/bin/env npx ts-node

import * as readline from 'readline';
import { stdin, stdout } from 'process';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

rl.question("What is your name? ", function (answer: string) {
  console.log(`Hi, ${answer}. How are you?`);
  rl.close();
});
