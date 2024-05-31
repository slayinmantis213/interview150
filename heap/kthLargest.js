// var findKthLargest = function(nums, k) {
//     nums.sort((a,b)=> a - b)
//     console.log(nums)
//     return nums[nums.length - k]
// };



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/
var findKthLargest = function (nums, k) {
    // -3 -2 0 3 6
    // size = 6 - -3 + 1 = 10
    /*
    count = [1, 1, 0, 1, 0, 0, 1, 0, 0, 1]
    -3 => 0
    -2 => 1
    ...
    num - -3
    -3 - -3 = 0
    -2 - -3 = 1
    */
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    const count = new Array(max - min + 1).fill(0);

    for (const num of nums) {
        console.log(`count : ${count[nums - min]}`)
        count[num - min]++;
    }

    let left = k;
    for (let i = count.length - 1; i >= 0; i--) {
        left -= count[i];
        if (left <= 0) {
            return i + min;
        }
    }

    return -1;
};
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))