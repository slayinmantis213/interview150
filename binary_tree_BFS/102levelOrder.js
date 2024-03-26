var levelOrder = function (root) {
    if (!root) return [];

    const arr = [];
    const q = [root];

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
        arr.push(innerArr);
    }
    return arr;
};