var findMin = function (nums) {
    let l = 0,
        r = nums.length - 1;

    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (nums[m - 1] && nums[m - 1] > nums[m]) {
            return nums[m];
        } else if (nums[r] >= nums[m]) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return nums[0];
};