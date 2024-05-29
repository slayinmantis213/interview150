//iterative

var searchRange = function (nums, target) {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        // const m = Math.floor((l + r) / 2);
        if (nums[l] < target) {
            l++;
        }
        if (nums[r] > target) {
            r--;
        }
        if (nums[l] == target && nums[r] == target) return [l, r];
    }
    return [-1, -1];
};

//binary

var searchRange = function (nums, target) {
    let l = 0,
        r = nums.length - 1;

    let startIndex = -1;
    let endIndex = -1;
    // search for start index
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (nums[m] < target) {
            l = m + 1;
        } else if (nums[m] >= target) {
            r = m - 1;
        }
        if (nums[l] == target) startIndex = l;
    }
    l = 0;
    r = nums.length - 1;
    // search for end index
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (nums[m] > target) {
            r = m - 1;
        } else if (nums[m] <= target) {
            l = m + 1;
        }
        if (nums[r] == target) endIndex = r;
    }
    return [startIndex, endIndex];
};
