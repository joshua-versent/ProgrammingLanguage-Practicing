#!/usr/bin/env npx ts-node

function add_suffix (suffix: string) {
  let func = function (str: string): string {
    return str + suffix;
  };
  return func
};

const add_ly = add_suffix("ly");

console.log(add_ly("hopeless"));
console.log(add_ly("total"));

const add_less = add_suffix("less");

console.log(add_less("fear"));
console.log(add_less("ruth"));
