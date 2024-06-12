
// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1


var coinChange = function(coins, amount) {
    const a  = amount
    const solutions = []
    const dp  = (i, res, coins, amount) => {
        amount -= coins[i]
        if(amount > 0){
            dp(i, res + 1, coins, amount)
        }
        else if(amount === 0){
            solutions.push(res + 1)
        }
        else{
            dp(i + 1, 0, coins, a);
        }
    } 
    dp(0, 0, coins, amount);
};
const coins =
[186,419,83,408]
const amount =
6249


console.log(coinChange(coins, amount))