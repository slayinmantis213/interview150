// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.



// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

var permute = function (nums) {
    const res = [];
    const dfs = (nums, permutation) => {
        if (permutation.length === nums.length) {
            res.push([...permutation]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if(permutation.indexOf(nums[i]) !== -1) continue;
            permutation.push(nums[i]);
            dfs(nums, permutation);
            permutation.pop();
        }
    };
    dfs(nums, []);
    return res;
};

console.log(permute([1,2,3]))