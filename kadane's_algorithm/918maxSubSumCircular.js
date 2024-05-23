// var maxSubArray = function(nums) {
//     let currentMax = nums[0];
//     let globalMax = nums[0];
// let second = false;
// const visited = new Set().add(0);
// nums.push(...nums)
// for (let i = 0, j = nums.length - 1; i < nums.length, j >= 0; i++ , j--) {
// console.log(i)
// console.log(`nums i = ${nums[i]}`)
// currentMax = nums[i] + nums[j];
// if (currentMax > globalMax) {
//     globalMax = currentMax;
// }
// if(visited.has(i)) break;
// if(nums[i] > currentMax + nums[i]){
//     visited.clear()
//     visited.add(i);
//     currentMax = nums[i];
// }
// else{
//     visited.add(i);
//     currentMax += nums[i]
// }
// if (currentMax > globalMax) {
//     globalMax = currentMax;
// }
// if(i === nums.length - 1 && !second){
//     i = -1;
//     second = true;
// }
//     }

//     return globalMax;
// };

/*
        find n
        double the array
        two iterators?
        left and right iterators
        expanding window
        const visited = new Set().add(i % n);
        visited.has(i % n)
        */
// console.log(maxSubArray([5,-3,5]))

// console.log(nums.reduce((partialSum, a)=> partialSum + a, 0))
// console.log(maxSubArray([1,-2,3,-2]))

var maxSubarraySumCircular = function (nums) {
    //edge case
    if(nums.length == 1){
        return nums[0];
    }
    //get array total sum
    let sum = 0;
    for(n of nums){
        sum += n;
    }
    let currentMax = nums[0];
    let globalMax = nums[0];
    let currentMin = nums[0];
    let globalMin = nums[0];
    //loop with kadane's finding globalMin and globalMax subarray values
    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        if (currentMax > globalMax) {
            globalMax = currentMax;
        }
        currentMin = Math.min(nums[i], currentMin + nums[i]);
        if (currentMin < globalMin) {
            globalMin = currentMin;
        }
    }
    //edge case for arrays made of only negative numbers
    if(globalMin === sum){
        return globalMax;
    }
    // compare found max to sum minus min and return.
    return Math.max(globalMax, sum - globalMin);
};
const nums = [5, -3, 5];
console.log(maxSubarraySumCircular(nums));
