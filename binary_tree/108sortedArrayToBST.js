class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
nums = [-10,-3,0,5,9]

var sortedArrayToBST = function(nums) {
    const middle = Math.floor(nums.length/2);
    const root = new TreeNode(nums[middle]);

    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    
    return root;
};

sortedArrayToBST([-10,-3,0,5,9,6])