// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

//mine
var getMinimumDifference = function (root) {
    if (!root) return null;
    let min = Number.MAX_VALUE;
    const q = [root];
    const vals = []
    while (q.length > 0) {
        const node = q.shift();
        vals.push(node.val);
        if (node.left) {
            q.push(node.left);
        }
        if (node.right) {
            q.push(node.right);
        }
    }

    for (let i = 0; i < vals.length; i++) {
        for (let j = i + 1; j < vals.length; j++) {
            if (Math.abs(vals[i] - vals[j]) < min) {
                min = Math.abs(vals[i] - vals[j]);
            }
        }
    }
    return min;
};


console.log(vals)
const root = new TreeNode(236);
root.left = new TreeNode(104);
root.right = new TreeNode(701);
root.right.right = new TreeNode(911);
root.left.right = new TreeNode(277);

const result = getMinimumDifference(root);
console.log(result);

//theirs

var getMinimumDifference = function (root) {
    let lowest = Infinity;
    let arr = [];
    iterate(root);
    function iterate(node) {
        if (!node) return;
        arr.push(node.val);
        iterate(node.left);
        iterate(node.right);
    }
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] !== undefined) {
            let val = arr[i] - arr[i - 1];
            if (val < lowest) lowest = val;
        }
    }
    return lowest;
};
console.log([236,104,701,227,911].sort())

