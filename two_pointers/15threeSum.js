// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// var threeSum = function(nums) {
//     const dict = {};
//     const result = [];
//     nums.sort((a,b) => a-b);
//     let j = 1;
//     let i = 0;
//     while(i < nums.length - 2){
//         if(j >= nums.length - 1){
//             i++;
//             j = i + 1;
//         }
//         dict[(nums[i] + nums[j]) * - 1] = [nums[i] , nums[j]]
//         j++;
//     }
//     for(let i = 0; i < nums.length; i++){
//         if(dict.hasOwnProperty(nums[i])){
//             console.log(dict[nums[i]])
//             result.push([nums[i], ...dict[nums[i]]])
//             delete dict[nums[i]];
//         }
//     }
//     return result;
// };
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    let i = 0,
        lo = 1,
        hi = nums.length - 1;

    while (nums[i] <= 0) {
        if (nums[i] == nums[i - 1]) {
            i++;
            continue;
        }
        lo = i + 1;
        hi = nums.length - 1;
        while (lo < hi) {
            const sum = nums[i] + nums[lo] + nums[hi];
            if (sum < 0) {
                lo++;
            } else if (sum > 0) {
                hi--;
            } else {
                res.push([nums[i], nums[lo], nums[hi]]);
                hi--;
                lo++;
                while (nums[lo] === nums[lo - 1]) {
                    lo++;
                }
            }
        }
        i++;
    }
    return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));