#!/usr/bin/env npx ts-node

class TreeNode {
     val: number;
     left: TreeNode | null;
     right: TreeNode | null;
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
  };
};

function checkTree(root: TreeNode | null): boolean {
    if (root === null || root.left === null || root.right === null) {
        return false;
    }
    if (Number.isFinite(root.val) && Number.isFinite(root.left.val) && Number.isFinite(root.right.val)) {
        return (root.val === (root.left.val + root.right.val));
    }
    return false;
}

function functionA() {
    console.log("inside functionA()");
    return false;
}

function functionB() {
    console.log("inside functionB()");
    return true;
}

function functionC() {
    console.log("inside functionC()");
    return false;
}

console.log("12341");
//let num: number = -1/0;
//console.log(num);
let root: TreeNode | null = null;
console.log(checkTree(root));
const range = (start: number, end: number) =>
   Array.from(
            Array(end - start).keys()
        ).map(x => x + start);

console.log([1,2,3])
console.log(Array.from([1,2,3]))

for (let i of [1,2,3,4]) {
    console.log(i + 10);
}
