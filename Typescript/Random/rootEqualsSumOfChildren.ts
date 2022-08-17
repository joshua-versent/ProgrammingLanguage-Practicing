#!/usr/bin/env npx ts-node
/* *
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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


//  function checkTree(root: TreeNode | null): boolean {
//   let num: number = root.left.val + root.right.val;
//   if (num === root.val) {
//       return true;
//   } else {
//       return false;
//   };
// };

function checkTree(root: TreeNode | null): boolean {
    if (root === null) {
       return false; 
    } else {
        if (root.left === null || root.right === null) {
            return false;
        } else {
            if (Number.isFinite(root.left.val) && Number.isFinite(root.right.val) {
                // happy path
                // do something here
                return true
            } else {
                return false;
            }
        }
    }
}

function checkTree(root: TreeNode | null): boolean {
    if (root === null || root.left === null || root.right === null) {
        return false;
    }
    if (Number.isFinite(root.val) && Number.isFinite(root.left.val) && Number.isFinite(root.right.val)) {
        return (root.val === (root.left.val + root.right.val));
    }
    return false;
}

function checkTree(root: TreeNode | null): boolean {
  return root!.val === root!.left!.val + root!.right!.val;
};
