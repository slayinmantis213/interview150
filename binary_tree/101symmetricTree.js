// mine

var isSymmetric = function(root) {
    return compair(root.left, root.right);
};
function compair(left, right){
    if(left === null && right === null){
        return true;
    }
    if(left === null || right === null){
        return false;
    }
    if(left.val === right.val){
        return compair(left.right, right.left) && compair(left.left, right.right);
    }
    else{
        return false;
    }
};

//theirs

var isSymmetric = function (root) {
    if (root == null) return true;
    return isMirror(root.left, root.right);

    function isMirror(leftNode, rightNode) {
        if (leftNode == null && rightNode == null) return true;
        if (leftNode == null || rightNode == null) return false;
        return leftNode.val === rightNode.val &&
            isMirror(leftNode.left, rightNode.right) &&
            isMirror(leftNode.right, rightNode.left);
    }
};
