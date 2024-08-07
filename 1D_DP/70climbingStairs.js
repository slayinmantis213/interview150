// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// var climbStairs = function(n) {
//     if(n === 1 || n === 2){
//         return n;
//     }
//     return climbStairs(n - 1) + climbStairs(n - 2);
// };


var climbStairs = function(n) {
    if (n === 1 || n === 2) {
        return n;
    }
    
    let dp = new Array(n);
    dp[0] = 1;
    dp[1] = 2;
    
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    console.log(dp)
    return dp[n - 1];
};

console.log(climbStairs(45));

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Input: n = 4
// Output: 5 
// 1. 1 + 1 + 1 + 1
// 2. 1 + 1 + 2
// 3. 1 + 2 + 1
// 4. 2 + 1 + 1
// 5. 2 + 2

// Input: n = 5
// Output: 8 
// 1. 1 + 1 + 1 + 1 + 1
// 2. 1 + 1 + 1 + 2
// 3. 1 + 1 + 2 + 1
// 4. 1 + 2 + 1 + 1
// 5. 2 + 1 + 1 + 1
// 6. 2 + 2 + 1
// 7. 2 + 1 + 2
// 8. 1 + 2 + 2

// Input: n = 6
// Output: 12 
// 1. 1 + 1 + 1 + 1 + 1 + 1
// 2. 1 + 1 + 1 + 1 + 2
// 3. 1 + 1 + 1 + 2 + 1
// 4. 1 + 1 + 2 + 1 + 1
// 5. 1 + 2 + 1 + 1 + 1
// 6. 2 + 1 + 1 + 1 + 1
// 7. 2 + 1 + 1 + 2
// 8. 2 + 1 + 2 + 1
// 9. 2 + 2 + 1 + 1
//10. 1 + 2 + 1 + 2
//11. 1 + 2 + 2 + 1
//12. 2 + 2 + 2
