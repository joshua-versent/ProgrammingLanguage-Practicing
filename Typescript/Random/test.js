#!/usr/bin/env node

// let a = 1;
// if (a) {
//     console.log('a is true');
// if (typeof b === 'undefined') {
//     console.log('b is false');
// }
let week = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
};


let time = ''
let AEST_time = new Date().toLocaleString("en-US", {timeZone: "Australia/Melbourne"});
let atime = new Date(AEST_time);
let hours = atime.getHours();
switch (true) {
    case (hours < 12):
        time = 'morning';
        break;
    case (hours < 18):
        time = 'afternoon';
        break;
    case (hours < 24):
        time = 'evening';
        break;
}
console.log(week[atime.getDay()]);
console.log(time);
// console.log(AEST_time);

let a = true;
let b = true;
let c = true;
let d = false;

// if (!(a && b && c && d)) {
//     console.log('a is true');
// } else {
//     console.log('a is false');
// }

let arr = [a, b, c, d];
console.log(arr.every(Boolean));

let abc = undefined;
console.log(Boolean(abc));
