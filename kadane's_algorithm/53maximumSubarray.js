// Given an integer array nums, find the subarray with the largest sum, and return its sum.

var maxSubArray = function(nums) {
    let currentMax = nums[0];
    let globalMax = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        if (currentMax > globalMax) {
            globalMax = currentMax;
        }
    }
    
    return globalMax;
};

// Example usage
const array = [1, -2, 3, 5, -1, 2];
console.log(kadaneAlgorithm(array));  // Output: 9