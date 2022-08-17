#!/usr/bin/env npx ts-node

// estimate if an array is a boomerang
function isBoomerang(arr: Array<number>): boolean {
    if (arr[0] === arr[2] && arr[1] !== arr[2]) {
        return true;
    } else {
        return false;
    };
};

// break down array to smaller arrays (3 ele)
function breakArray(arr: Array<number>): Array<number>[] {
    let result: Array<number>[] = [];
    for (let idx = 0; idx <= arr.length - 3; idx++) {
        result.push(arr.slice(idx, idx+3));
    };
    return result;
};

// validate the array
function arrValidation(arr: Array<number>): boolean {
    if (arr.length >= 3) {
        return true;
    } else {
        return false;
    };
};

// main function
function countBoomerangs(arr: Array<number>): number {
    let counter: number = 0;
    if (arrValidation(arr)) {
        //let arrays: Array<number>[] = breakArray(arr);
        //let arrays: Array<Array<number>> = breakArray(arr);
        let arrays: number[][] = breakArray(arr);
        for (let array of arrays) {
            if (isBoomerang(array)) {
                counter++;
            };
        };
    }
    return counter;
};


console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));

