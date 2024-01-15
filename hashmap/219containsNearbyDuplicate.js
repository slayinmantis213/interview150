// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// mine
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        // if(!map.has(nums[i])){
        //     map.set(nums[i], i);
        // }
        // else{
            if(Math.abs(map.get(nums[i]) - i) <= k){
                return true;
            }
            // else{
                map.set(nums[i], i);
            // }
        }
    // }
    return false;
};

containsNearbyDuplicate([1,2,3],5);


//theirs
var containsNearbyDuplicate = function(nums, k) {
    const hasmap = new Map();
    for (let idx = 0; idx < nums.length; idx++) {
        if (idx - hasmap.get(nums[idx]) <= k) {
            return true;
        }
        hasmap.set(nums[idx], idx);
    }
    return false;
};