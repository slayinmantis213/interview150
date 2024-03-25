/* 

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.
The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

*/

function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

var connect = function(root) {
    if(!root) return root;
    const q = [root];
    while(q.length > 0){
        const size = q.length;
        for(let i = 0; i < size; i++){
            const node = q.shift();
            if(i < size - 1){
                node.next = q[0];
            }
            if(node.left){
                q.push(node.left);
            }
            if(node.right){
                q.push(node.right);
            }
        }
    }
    return root;
};