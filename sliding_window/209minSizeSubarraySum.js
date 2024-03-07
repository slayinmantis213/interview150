/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
      let minSize = Number.MAX_VALUE;
    
      let i = 0,
        j = 0;
    
      let sum = nums[i];
    if (sum >= target) return 1
    
      while (i < nums.length - 1) {
          if (nums[i] >= target || nums[j] >= target) return 1
        if (sum >= target) {
          minSize = minSize > j - i + 1 ? j - i + 1 : minSize;
          sum -= nums[i];
          i++;
          continue;
        }
        if (sum < target) {
          j++;
          sum += nums[j];
          continue;
        }
        if (i === 0 || j >= nums.length - 1) break;
      }
    
      return minSize <= nums.length ? minSize : 0;
};