var rightSideView = function (root) {
    const arr = [];
    if (!root) return arr;
    const deque = [root];
    while (deque.length > 0) {
        const size = deque.length;
        let node = deque[deque.length - 1];
        arr.push(node.val);
        for (let i = 0; i < size; i++) {
            node = deque.shift();
            if (node.left) {
                deque.push(node.left);
            }
            if (node.right) {
                deque.push(node.right);
            }
        }
    }
    return arr;
};
