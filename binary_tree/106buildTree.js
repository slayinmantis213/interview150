// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree,

// construct and return the binary tree.

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var buildTree = function(inorder, postorder) {
    if (postorder.length <= 1) return new TreeNode(postorder[0], null, null);
    return dfs(inorder, postorder, postorder[postorder.length - 1]);
};

var dfs = function(inorder, postorder, rootVal) {
    if (postorder.length === 0) return null;
    if (postorder.length === 1) {
        return new TreeNode(postorder[0], null, null);
    }

    const n = inorder.indexOf(rootVal);

    const leftInOrder = inorder.slice(0, n);
    const leftPostOrder = postorder.slice(0, n);
    
    const rightInOrder = inorder.slice(n + 1);
    const rightPostOrder = postorder.slice(n, postorder.length - 1);

    return new TreeNode(
        postorder[postorder.length - 1],
        dfs(leftInOrder, leftPostOrder, leftPostOrder[leftPostOrder.length - 1]),
        dfs(rightInOrder, rightPostOrder, rightPostOrder[rightPostOrder.length - 1])
    );
}
Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]

// our output:
// [9,9,15,null,null,15,7]
// Expected:
// [3,9,20,null,null,15,7]