// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

var averageOfLevels = function(root) { 
    const result = [];
    if(root === null) return result;
    const nodes = [{node: root, level: 0}];
    let size = 0;
    let total = 0;
    let curr = 0;
    while(nodes.length > 0){
        const { node, level } = nodes.shift();
        if(level !== curr){
            // console.log("level")
            // console.log(`size: ${size}`);
            // console.log("total:" + total);
            curr ++;
            result.push(total/size);
            total = 0;
            size = 0;
        }
        size ++;
        total += node.val;
        if(node.left){
            nodes.push({node: node.left, level: level + 1});
        }
        if(node.right){
            nodes.push({node : node.right, level : level + 1});
        }
        // console.log(node);
    }
    result.push(total/size);
    return result;
};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

const result = averageOfLevels(root);
console.log(result);