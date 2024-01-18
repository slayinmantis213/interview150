// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.


// mine
var canJump = function(nums) {
    if(nums.length <= 1){
        return true;
    }
    let jump = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(i > jump){
            return false;
        }
        jump = Math.max(jump, nums[i] + i)
        if(jump >= nums.length - 1){
            return true;
        }
    }
    return false;
};

console.log(canJump([1,0,1,0]))

// thiers

// var canJump = function(nums) {
//     // Base condition...
//     if(nums.length <= 1)
//         return true;
//     // To keep the maximum index that can be reached...
//     let maximum = nums[0];
//     // Traverse all the elements through loop...
//     for(let i = 0; i < nums.length; i++){
//         //if there is no way to jump to next...
//         // so we should return false...
//         if(maximum <= i && nums[i] == 0) 
//             return false;
//         //update the maximum jump...    
//         if(i + nums[i] > maximum){
//             maximum = i + nums[i];
//         }
//         //maximum is enough to reach the end...
//         if(maximum >= nums.length-1) 
//             return true;
//     }
//     return false;   
// };