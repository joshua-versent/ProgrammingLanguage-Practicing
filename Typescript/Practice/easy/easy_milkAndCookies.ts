#!/usr/bin/env npx ts-node

function timeForMilkAndCookies(date: Date) {
  if (date.getMonth() === 11 && date.getDate() === 24) {
    return true;
  } else {
    return false;
  };
};

console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));
console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));
console.log(timeForMilkAndCookies(new Date(3000, 11, 24)));

// const date = new Date(2013, 11, 24)
// console.log(date.getDate());
