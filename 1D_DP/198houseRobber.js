/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const memo = new Array(nums.length);
    memo.fill(-1);
    var robFrom = function (i, nums) {
      if (i >= nums.length) {
        return 0;
      }
  
      if (memo[i] > -1) {
        return memo[i];
      }
  
      const ans = Math.max(robFrom(i + 1, nums), robFrom(i + 2, nums) + nums[i]);
      memo[i] = ans;
      return ans;
    };
  
    return robFrom(0, nums);
  };
  
  var dpRob = function (nums) {
    let n = nums.length;
    if (n === 0) return 0;
  
    maxRobbedAmount = new Array(nums.length + 1);
  
    maxRobbedAmount[n] = 0;
    maxRobbedAmount[n - 1] = nums[n - 1];
  
    for (let i = n - 2; i >= 0; i--) {
      maxRobbedAmount[i] = Math.max(
        maxRobbedAmount[i + 1],
        maxRobbedAmount[i + 2] + nums[i]
      );
    }
  
    return maxRobbedAmount[0];
  };
  
  //            |      
  const nums = [2, 1, 1, 2]; // 4
  
  // maxRobbedAmount[3] = 2
  // maxRobbedAmount[2] = 
  
  [4,3,2,2,0]
  
  
  
  
  // [2, 1, 9, 13, 1]
  //  +  -  ?  +  - ?+
  // [8, 7, 3, 4, 2, 7, 2]
  // [2,7,9,3,1]
  // [4,1,2,7,5,3,1] out: 12 expected: 14
  // start by comparing the index to its neighbors
  // if greater than BOTH neighbors, grab it
  // move index up by 2
  // else move index up by 1
  
  console.log(dpRob(nums));
  console.log(rob(nums));

/*
Overview
Our professional robber is in for a treat! They have a buffet of houses available for them to rob. Technically, they can rob any of the houses on the street. However, the alarm companies are smart enough to catch any robber red-handed under certain conditions. If there were no alarms in the houses, obviously the robber would rob every house and make the most money.

However, now they have a lot of choices to make. Let's look at a few houses on the street, the different choices our robber can make, and how those choices will affect the heist.

robber example optimal

Figure 1. An example showing the robber making the optimal choices to obtain the most money.

In this example, the robber ended up making 600 which is the maximum they can make for this series of houses. Let's take another set of choices that the robber can make where they will not make the maximum amount.

robber example not so optimal

Figure 2. The same example showing the robber making sub-optimal choices.

In this case, the series of choices that the robber made turned out to be less than optimal and they ended up making a paltry 250.

A series of choices essentially gives us a subset of houses from the original list. We need to make these choices in such a way that the overall profit is maximized.

There is no greedy way of deciding if the robber should rob a house or not. The best greedy strategy may be to check the neighboring houses and only rob a house if it gives them more money than the neighbors combined. That might be a sound greedy strategy. However, by doing so, the robber may miss out on making the maximum profit. Let's look at an example for that.

robber greedy choice doesn't work

Figure 3. Depicting the failure of a greedy strategy on the same example.

In this example, you could argue that after the robber decided to rob the 3rd house, they could go back and rob the first one as well. In this case, that will give us the optimal answer. However, that decision is still local in that we just consider 3 houses at a time.

What we need is to try all the possibilities and see which one gives us (the robber) the optimal loot.


Approach 1: Recursion with Memoization
Intuition

As we mentioned above, the easiest approach here is to try all possible combinations of house choices and then use the combination that gives the maximum amount of money to the robber. We do this because there is no plausible greedy strategy that we can use to decide if the robber should rob a particular house or not.

We rely on our good friend recursion whenever we have choices involved in solving a problem. Technically, a robber can come back and rob a house that they previously rejected. However, since we are trying all options, we will not go back and rob an unrobbed house since that scenario will be covered in a different recursive path.

The basic choice that we make is whether to rob the current house or not. If the robber decides to rob the current house, they have to skip the next house. Otherwise, they can evaluate the same choice on the next house i.e. to rob or not to rob.

Subproblems

To approach a problem recursively, we need to make sure that it can be broken down into sub-problems. Additionally, we need to ensure that the optimal solution to these sub-problems can be used to form the solution to the main problem. Let's see how we can divide this problem into smaller recursive problems.

Let's say that we have a function called robFrom which we will use to solve this problem. The only input this function takes is an index, position. This position essentially represents a suffix in the array which we, the robber, have yet to scan. Essentially, the position indicates that the robber has yet to scan houses [position,â‹¯â€‰,N][\text{position}, \cdots, N][position,â‹¯,N] where NNN represents the total number of houses.

Naturally, the answer to our problem would be the function call robFrom(0) which means scan all the houses and return the maximum profit. Now let's think about robFrom(i) for a moment. This simply represents a sub-array or a suffix from the main array. We can think about this as a smaller max-profit problem in itself, can't we?

A suffix of the initial set of houses simply means a smaller set of houses that the robber has to consider. We will be working with the assumption that in the function call robFrom(i), the robber has to maximize their profit from i..N houses.

At each step, the robber has two options. If he chooses to rob the current house, he will have to skip the next house on the list by moving two steps forward. If he chooses not to rob the current house, he can simply move on to the next house in the list. Let's see this mathematically.

robFrom(i)=max(robFrom(i+1),robFrom(i+2)+nums(i))\text{robFrom}(i) = \text{max}(\text{robFrom}(i + 1), \text{robFrom}(i + 2) + \text{nums}(i))robFrom(i)=max(robFrom(i+1),robFrom(i+2)+nums(i))

Recursion tree and memoization

Now that we have an idea about the recursive structure of our problem, let's look at the recursion tree which will be formed. This is important so that we can determine if we have repeating sub-problems, in which case we can use memoization or caching to reduce the overall solution complexity.

overlapping subproblems in the recursion tree

class Solution {
    
    private int[] memo;
    
    public int rob(int[] nums) {
        
        this.memo = new int[100];
        
        // Fill with sentinel value representing not-calculated recursions.
        Arrays.fill(this.memo, -1);
        
        return this.robFrom(0, nums);
    }
    
    private int robFrom(int i, int[] nums) {
        
        // No more houses left to examine.
        if (i >= nums.length) {
            return 0;
        }
        
        // Return cached value.
        if (this.memo[i] > -1) {
            return this.memo[i];
        }
        
        // Recursive relation evaluation to get the optimal answer.
        int ans = Math.max(this.robFrom(i + 1, nums), this.robFrom(i + 2, nums) + nums[i]);
        
        // Cache for future use.
        this.memo[i] = ans;
        return ans;
    }
}

Figure 4. Overlapping sub-problems in the recursion tree.

As we can see in the recursion tree above, we have the repeating sub-problems (nodes) marked in the same color. A repeating node in the tree represents an entire subtree calculation that has to be repeated which is computationally expensive. Hence, we cache the already computed results so that we don't need to re-calculate the maximum profit for previously seen sub-problems.

Let's formalize this idea concretely in the algorithm section below.

Algorithm

We define a function called robFrom() which takes the index of the house that the robber currently has to examine. Also, this function takes the nums array which is required during the calculations.
At each step of our recursive call, the robber has two options. He can either rob the current house or not.
If the robber chooses to rob the current house, then he have to skip the next house i.e robFrom(i + 2, nums). The answer here would be whatever is returned by robFrom(i + 2, nums) in addition to the amount that the robber will get by robbing the current house i.e. nums[i].
Otherwise, he can simply move on to the house next door and return whatever profit he will make in the sub-problem i.e. robFrom(i + 1, nums).
We need to find, cache, and return the maximum of these two options at each step.
robFrom(0, nums) will give us the answer to the entire problem.

Implementation


Complexity Analysis

Time Complexity: O(N)O(N)O(N) since we process at most NNN recursive calls, thanks to caching, and during each of these calls, we make an O(1)O(1)O(1) computation which is simply making two other recursive calls, finding their maximum, and populating the cache based on that.

Space Complexity: O(N)O(N)O(N) which is occupied by the cache and also by the recursion stack.


Approach 2: Dynamic Programming
Intuition

The idea here is the same as before except that instead of following a recursive approach, we will be sticking with a tabular approach. The recursive approach may run into trouble when the recursion stack grows too large. It may also run into trouble because, for each recursive call, the compiler must do additional work to maintain the call stack (function variables, etc.) which results in unwanted overhead. The dynamic programming approach is simply a tabular formulation of the ideas presented above.

The cache we had before will still exist in this approach but instead of calling it a cache, we will refer to it as our dynamic programming table. Every DP solution has a table that we populate starting with the base case or the simplest of cases for which we already know the answer. E.g. for our problem, we know that in the absence of houses, the robber will make 0 profit. Similarly, if there is just one house left to rob, the robber will rob that house, and that will be the maximum profit.

We start by populating the dynamic programming table with these initial values and then build the table in a bottom-up fashion which is the essence of this solution. Let's look at the algorithm to formalize this idea.

Algorithm

We define a table which we will use to store the results of our sub-problems. Let's call this table maxRobbedAmount where maxRobbedAmount[i] is the same value that would be returned by recurse(i) in the previous solution.
We set maxRobbedAmount[N] to 0 since this means the robber doesn't have any houses left to rob, thus zero profit. Additionally, we set maxRobbedAmount[N - 1] to nums[N - 1] because in this case, there is only one house to rob which is the last house. Robbing it will yield the maximum profit.
We iterate from N - 2 down to 0 and we set maxRobbedAmount[i] = max(maxRobbedAmount[i + 1], maxRobbedAmount[i + 2] + nums[i]). Note that this is the same as the recursive formulation in the previous solution. The only difference is that we have already calculated the solutions to the sub-problems and we simply reuse the solutions in O(1) time when calculating the solution to the main problem.
We return the value in maxRobbedAmount[0].

Implementation

class Solution {
    
    public int rob(int[] nums) {
        
        int N = nums.length;
        
        // Special handling for empty array case.
        if (N == 0) {
            return 0;
        }
        
        int[] maxRobbedAmount = new int[nums.length + 1];
        
        // Base case initializations.
        maxRobbedAmount[N] = 0;
        maxRobbedAmount[N - 1] = nums[N - 1];
        
        // DP table calculations.
        for (int i = N - 2; i >= 0; --i) {
            
            // Same as the recursive solution.
            maxRobbedAmount[i] = Math.max(maxRobbedAmount[i + 1], maxRobbedAmount[i + 2] + nums[i]);
        }
        
        return maxRobbedAmount[0];
    }
}


Complexity Analysis

Time Complexity: O(N)O(N)O(N) since we have a loop from Nâˆ’2â‹¯0N - 2 \cdots 0Nâˆ’2â‹¯0 and we simply use the pre-calculated values of our dynamic programming table for calculating the current value in the table which is a constant time operation.

Space Complexity: O(N)O(N)O(N) which is used by the table. So what is the real advantage of this solution over the previous solution? In this case, we don't have a recursion stack. When the number of houses is large, a recursion stack can become a serious limitation, because the recursion stack size will be huge and the compiler will eventually run into stack-overflow problems (no pun intended!).


Approach 3: Optimized Dynamic Programming
Intuition

This is the exact same solution as the previous one with the exception that we will be optimizing the space complexity here. Let's look at the recursive relation again to see where we can reduce the amount of space used.

robFrom(i)=max(robFrom(i+1),robFrom(i+2)+nums(i))\text{robFrom}(i) = \text{max}(\text{robFrom}(i + 1), \text{robFrom}(i + 2) + \text{nums}(i))robFrom(i)=max(robFrom(i+1),robFrom(i+2)+nums(i))

To calculate the current value, we just need to rely on the next two consecutive values/recursive calls.

Porting this idea over to our dynamic programming solution we see that in order to calculate the value at a current index in the dynamic programming table, we simply need to know the next two values i.e. maxRobbedAmount[i + 1] and maxRobbedAmount[i + 2]. In the end we will return the value of maxRobbedAmount[0].

Instead of keeping an entire table for storing these cached values, we can get by with simply keeping track of the "next" two values.

Let's see this more concretely in the algorithm section.

Algorithm

We will make use of two variables here called robNext and robNextPlusOne which at any point will represent the optimal solution for maxRobbedAmount[i + 1] and maxRobbedAmount[i + 2]. These are the two values that we need to calculate the current value.

We set robNextPlusOne to 0 since this means the robber doesn't have any houses left to rob, thus zero profit. Additionally, we set robNext to nums[N - 1] because in this case there is only one house to rob which is the last house. Robbing it will yield the maximum profit.

Note We are assuming that robNextPlusOne is the value of maxRobbedAmount[N] and robNext is maxRobbedAmount[N-1] initially.

We iterate from N - 2 down to 0 and set current = max(robNext, robNextPlusOne + nums[i]). Note that this is the same as the dynamic programming solution except that we are making use of our variables and not entries from the table.

Set robNextPlusOne = robNext.

Set robNext = current. Updating the two variables is important as we iterate down to 0.

We return the value in robNext.

Implementation


Time Complexity

Time Complexity: O(N)O(N)O(N) since we have a loop from Nâˆ’2â‹¯0N - 2 \cdots 0Nâˆ’2â‹¯0 and we use the precalculated values of our dynamic programming table to calculate the current value in the table which is a constant time operation.

Space Complexity: O(1)O(1)O(1) since we are not using a table to store our values. Simply using two variables will suffice for our calculations.

*/