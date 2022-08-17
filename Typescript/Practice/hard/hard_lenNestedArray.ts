#!/usr/bin/env npx ts-node


// written by myself
function getLength(arr: any): number {
    if (arr.length === 0) {
        return 0;
    } else if (arr.length === 1) {
        if (typeof(arr[0]) === 'number') {
            return 1;
        } else {
            return getLength(arr[0]);
        };
    } else {
        if (typeof(arr[0]) === 'number') {
            return 1 + getLength(arr.slice(1,));
        } else {
            return getLength(arr[0]) + getLength(arr.slice(1,));
        };
    };
};

// reference to solution
function getLength2(arr: any): number {
    let counter: number = 0;
    for (let ele of arr) {
        if (Array.isArray(ele)) {
            counter += getLength2(ele);
        } else {
            counter++;
        };
    };
    return counter
};

function getLength3(array: any): number {
    if (Array.isArray(array)) {
        return array.map(function(y: any): number { return getLength3(y); })
                    .reduce(function(a: number, b: number): number { return a+b; })
    } else {
        return 1;
    }
}

type Josh = number | Array<Josh>;

function getLength4(array: Array<Josh>): number {
    if (array.length === 0) {
        return 0;
    } else {
        return array.map(function(e: Josh) { return (Array.isArray(e) ? getLength4(e) : 1); })
                    .reduce(function(a: number, b: number) { return a+b; });
    }
}
/*
function getLength4(array: Array<Josh>): number {
    if (array.length === 0) {
        return 0;
    } else {
        return array.map(function(e: Josh) {
            if (Array.isArray(e)) {
                return getLength4(e);
            } else {
                return 1;
            }
        }).reduce(function(a: number, b: number) { return a+b; });
    }
}
*/

type Eddie = Array<number | Eddie>;
function getLength5(array: Eddie): number {
    if (array.length === 0) {
        return 0;
    } else {
        return array.map(function(e: number | Eddie) {
            if (Array.isArray(e)) {
                return getLength5(e);
            } else {
                return 1;
            }
        }).reduce(function(a: number, b: number) { return a+b; });
    }
}

console.log(getLength([1, [2, [3, [4, [5, 6]]]], [3]]));
console.log(getLength2([1, [2, [3, [4, [5, 6]]]], [3]]));
console.log(getLength3([1, [2, [3, [4, [5, 6]]]], [3]]));
console.log(getLength4([1, [2, [3, [4, [5, 6]]]], [3]]));
console.log(getLength5([1, [2, [3, [4, [5, 6]]]], [3]]));
//console.log(getLength4([1, [3, 4]]));
