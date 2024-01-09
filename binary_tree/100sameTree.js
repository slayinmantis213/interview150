// mine
var isSameTree = function(p, q) {
    if(p && q){
        if(p.val !== q.val){
            return false;
        }
        let left = isSameTree(p.left, q.left);
        let right = isSameTree(p.right, q.right);
        if(left == false || right == false){
            return false;
        }else{
            return true;
        }
    }
    else if(p === q){
        return true;
    }
    else{
        return false;
    }
};

//theirs

var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    }

    if (p === null || q === null) {
        return false;
    }

    if (p.val !== q.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}