// Given the root of a binary tree, return the zigzag level order traversal of its nodes'
// values. (i.e., from left to right, then right to left for the next level and alternate between).
var zigzagLevelOrder = function(root) {
    if (!root) return [];

    const arr = [];
    const q = [root];
    let it = 0;
    while (q.length > 0) {
        const size = q.length;
        const innerArr = [];
        for (let i = 0; i < size; i++) {
            const node = q.shift();
            innerArr.push(node.val);
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        if(it%2 === 0){
            arr.push(innerArr);
        }
        else{
            arr.push(innerArr.reverse());
        }
        it++
    }
    return arr;
};
[0,2,4,1,null,3,-1,5,1,null,6,null,8]

[[0],[4,2],[1,3,-1],[8,6,1,5]]