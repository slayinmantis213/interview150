var maxSubArray = function(nums) {
    let currentMax = nums[0];
    let globalMax = nums[0];
    // let second = false;
    const visited = new Set().add(0);
    nums.push(...nums)
    for (let i = 1; i < nums.length; i++) {
        if(visited.has(i)) break;
        if(nums[i] > currentMax + nums[i]){
            visited.clear()
            visited.add(i);
            currentMax = nums[i];
        }
        else{
            visited.add(i);
            currentMax += nums[i]
        }
        if (currentMax > globalMax) {
            globalMax = currentMax;
        }
        // if(i === nums.length - 1 && !second){
        //     i = 0;
        //     second = true;
        // }
        console.log(currentMax)
    }
    
    return globalMax;
};

/*
find n
double the array
two iterators?
    left and right iterators
    expanding window
const visited = new Set().add(i % n);
visited.has(i % n)
*/

console.log(maxSubArray([5,-3,5]))
// console.log(maxSubArray([1,-2,3,-2]))