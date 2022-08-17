#!/usr/bin/env npx ts-node


// get the length of the str
function getLength(str: string): number {
    return str.length;
};

// get the first character of the str
function firstChar(str: string): string {
    return str[0];
};

// get the last character of the str
function lastChar(str: string): string {
    return str.slice(-1);
};

// get middle char(s)
function middleChar(str: string): string {
    let str_length: number = getLength(str);
    if (str_length % 2 === 0) {
        return str.slice(str_length / 2 - 1, str_length / 2 + 1);
    } else {
        return str[Math.floor(str_length / 2)]
    };
};

// get index of the second character
function indexSecond(str: string): string {
    let second: string = str[1];
    for (let idx in Array.from(str)) {
        if (Number(idx) > 1 && str[idx] === second) {
            return `@ index ${idx}`
        };
    };
    return "not found";
};

// input validation
function inputValidation(str: string): boolean {
    if (str.length >= 3) {
        return true;
    } else {
        return false;
    };
};

function inputValidation2(str: string): boolean {
    return (str.length >= 3);
};

// main function
function allAboutStrings(str: string): Array<number | string> | string {
    if (inputValidation(str)) {
        return [
            getLength(str),
            firstChar(str),
            lastChar(str),
            middleChar(str),
            indexSecond(str)
        ];
    } else {
        return "Please input valid string (e.g. string with at least 3 characters.)";
    };
};


console.log(allAboutStrings("LASA"));
console.log(allAboutStrings("Computer"));
console.log(allAboutStrings("Science"));
console.log(allAboutStrings("ab"));
