function flatten(root) {
    if (!root) return;

    const flattenHelper = (node) => {
        if (!node) return null;
        if (!node.left && !node.right) return node;

        const leftTail = flattenHelper(node.left);
        const rightTail = flattenHelper(node.right);

        if (leftTail) {
            leftTail.right = node.right;
            node.right = node.left;
            node.left = null;
        }

        return rightTail ? rightTail : leftTail;
    };

    flattenHelper(root);
}