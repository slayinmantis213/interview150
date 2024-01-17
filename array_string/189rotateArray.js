// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

//MINE

// this works 
// var rotate = function(nums, k) {
//     if(k === nums.length){
//         return nums;
//     }
//     let x = [];
//     for(let i = k; i > 0; i--){
//         x = [nums.pop() , ...x]; 
//     }

//     return [...x, ...nums];
// };

// Do not return anything, modify nums in-place instead.
var rotate = function(nums, k) {
    if(k === nums.length){
        return;
    }
    if(k > nums.length){
        k = k % nums.length;
    }
    nums.reverse()
    for(let i = 0; i < k; i++){
        nums.push(nums[i]); 
    }
    nums.reverse()
    for(let i = k; i > 0; i--){
        nums.pop(); 
    }
};
console.log(rotate([1,2,3,4,5,6,7], 3));

//THEIRS
var rotate = function(nums, k) {
    const size = nums.length;
    k %= size; // ensure k is in the range

    reverse(nums, 0, size-1); // Revere Entire Array
    reverse(nums, 0 , k-1); // Rrverse K elements
    reverse(nums, k, size-1); // Reverse remaining elements
};

// Function to reverse elements in the Array
var reverse = function(nums, start, end) {
    while(start < end){
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;end--;
    }
};
[1,2,3,4,5,6,7]
[7,6,5,4,3,2,1]
[5,6,7,4,3,2,1]
[5,6,7,1,2,3,4]