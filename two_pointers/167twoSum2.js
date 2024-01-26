// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.Given

// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

//us
var twoSum = function (numbers, target) {
    const map = {};
    for (let i = 0; i < numbers.length; i++) {
        if (map.hasOwnProperty(numbers[i])) {
            return [map[numbers[i]], i + 1]
        }
        map[target - numbers[i]] = i + 1;
    }
};

//dustin
var twoSum = function (numbers, target) {
    const compliments = {};
    for (let i = 0, j = numbers.length - 1; i <= j; i++, j--) {
        if (compliments[numbers[i]] !== undefined) {
            return [compliments[numbers[i]] + 1, i + 1].sort((a, b) => a - b);
        }
        compliments[target - numbers[i]] = i;
        if (compliments[numbers[j]] !== undefined) {
            return [compliments[numbers[j]] + 1, j + 1].sort((a, b) => a - b);
        }
        compliments[target - numbers[j]] = j;
    }
};
console.log(twoSum([2, 3, 4], 6))
//theirs
var twoSum = function (nums, target) {
    let i = 0, j = nums.length - 1;
    while (i < j) {
        if (nums[i] + nums[j] == target) return [i + 1, j + 1]
        if (nums[i] + nums[j] < target) i++;
        else j--
    }
};