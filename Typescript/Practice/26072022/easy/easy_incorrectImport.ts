#!/usr/bin/env npx ts-node

function fixImport (str1: string) {
  let arr: Array<string> = str1.split(' ');
  console.log(`from ${arr[3]} import ${arr[1]}`);
};

fixImport("import object from module_name");
fixImport("import randint from random");
fixImport("import pi from math");
