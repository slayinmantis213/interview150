var longestConsecutive = function(nums) {
    if(nums.length === 0){
        return 0;
    }
    let max = 1;
    let curr = 1;
    nums.sort((a , b) => a - b);
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === (nums[i - 1] + 1)){
            curr ++;
        }
        else if(nums[i] === nums[i - 1]){
            continue;
        }
        else{
            max = Math.max(curr, max);
            curr = 1;
        }
    }
    
    return Math.max(curr, max);
};


const nums = [100,4,200,1,3,2]
console.log(longestConsecutive(nums));
