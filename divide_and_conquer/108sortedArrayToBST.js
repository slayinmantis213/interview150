// Given an integer array nums where the elements are sorted in ascending order, convert it to a 
// height-balanced binary search tree.

// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var sortedArrayToBST = function(nums) {
    function recursion(nums){
        const mid = Math.floor(nums.length/2);
        console.log(mid)
        if(nums.length === 1){
            return new TreeNode(nums[0], null, null);
        }
        if(nums.length === 0){
            return null;
        }
        const left = nums.slice(0, mid);
        const right = nums.slice(mid + 1);
        return new TreeNode(nums[mid], recursion(left), recursion(right))
    }

    return recursion(nums);
};

const nums = [-10,-3,0,5,9];

console.log(sortedArrayToBST(nums))