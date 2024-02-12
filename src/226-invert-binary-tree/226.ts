// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
 
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

// function invertTree(root: TreeNode | null): TreeNode | null {
//     let inverted: TreeNode = new TreeNode(root?.val, null, null);
//     if(root !== null)
//     {
//         inverted.right = addNodeToInvert(inverted.right, root.left);
//         inverted.left = addNodeToInvert(inverted.left, root.right);
//     }
    
//     return inverted;
// };

// function addNodeToInvert(inverted: TreeNode | null, node: TreeNode | null) {
//     inverted = node;
//     if(inverted !== null && node !== null) {
//         addNodeToInvert(inverted.right, node.left);
//         addNodeToInvert(inverted.left, node.right);
//     }
//     return inverted;
// }

function invertTree(root: TreeNode | null): TreeNode | null {
    let inverted: TreeNode = new TreeNode(root?.val, null, null);
    return addNodeToInvert(inverted, root)
};

function addNodeToInvert(inverted: TreeNode | null, node: TreeNode | null) {
    
    if(node !== null) {
        if(!inverted)   
            inverted = new TreeNode(node.val)
        inverted.right = addNodeToInvert(inverted.right, node.left);
        inverted.left = addNodeToInvert(inverted.left, node.right);
    }
    return inverted;
}

describe("226. Invert Binary Tree", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const tree: TreeNode = new TreeNode(10, null, null);
        tree.left = new TreeNode(20, null, null);
        tree.right = new TreeNode(30, null, null);
        const testOutput = new TreeNode(10, new TreeNode(30), new TreeNode(20))
        const input = invertTree(tree);
        expect(input).toStrictEqual(testOutput);
    });
});

// Make this file a module to avoid global scoping
export { }
