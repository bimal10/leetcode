// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal

import { Queue, Stack } from "data-structure-typed";

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.


//  * Definition for a binary tree node.
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }


/* function inOrderTraversal(root: TreeNode | null): number[] {
    if(root === null)
        return [];
    inOrderTraversal(root.left);
    console.log(root.val)
    inOrderTraversal(root.right);

    return [];
}; */

function inOrderTraversal(root: TreeNode | null): number[] {
    const stack = new Stack();
    const output = new Array();
    if(root === null)
        return [];
    // output.push(root.val)
    // stack.push(root.val)
    while(1) {
        
        while(root) {
            
            stack.push(root);
            root=root?.left;
        }
        if(stack.isEmpty())
            break;

        // if(!root)
        //     continue;
        root = stack.pop();
        output.push(root?.val);
        root = (root?.right === undefined ? null : root.right);
        
    }

    return output;
};

function LevelOrderTraversal(root: TreeNode | null): number[] {
    const Q = new Queue<TreeNode>();
    const output = new Array();
    let temp: TreeNode | null = null;
    if(!root)
        return [];
    Q.push(root)
    temp = Q.shift() ?? null;
    while(temp) {
        output.push(temp?.val);
        if(temp?.left)
            Q.push(temp?.left);
        if(temp?.right)
            Q.push(temp?.right);
        temp = Q.shift() ?? null;
        
    }

    return output;
}
 
/**
 * Test
 */
describe("94. Binary Tree InOrder Traversal", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = false;
        const root = new TreeNode(1, new TreeNode(2,new TreeNode(4),new TreeNode(5)), new TreeNode(3,new TreeNode(6), new TreeNode(7)));
        expect(LevelOrderTraversal(root)).toStrictEqual([])
        expect(inOrderTraversal(root)).toStrictEqual([])
    });
});

// Make this file a module to avoid global scoping
export { }
