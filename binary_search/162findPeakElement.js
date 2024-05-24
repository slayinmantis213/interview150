var findPeakElement = function(nums) {
    if(nums.length === 1) return 0;
    let start = 1;
    let end = nums.length - 2;
    
    while(start < end){
        if(nums[start] > nums[start - 1] && nums[start] > nums[start + 1]){
            return start
        }
        if(nums[end] > nums[end - 1] && nums[end] > nums[end + 1]){
            return end
        }
        start ++;
        end --;
    }
    if(nums[0] > nums[1]) return 0
    return nums.length - 1
    
};

const nums = [1,2,1]

const nums1 = [1,2,1,3,5,6,4]

console.log(findPeakElement(nums))
console.log(findPeakElement(nums1))


//faster true binary solution
var findPeakElement = function(nums) {
    let [left, right] = [0, nums.length-1]
    while (left <= right) {
        let mid = left + Math.floor((right-left)/2)
        let lower = (mid-1) >= 0 && (mid-1) < nums.length ? nums[mid-1] : -Infinity
        let upper = (mid+1) >= 0 && mid+1 < nums.length ? nums[mid+1] : -Infinity
        if (nums[mid] > lower && nums[mid] > upper) return mid
        else if (nums[mid] > lower && nums[mid] < upper) left = mid+1
        else {
            right = mid-1
        }
    }
    return -1
};