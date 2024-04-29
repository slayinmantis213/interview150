// https://leetcode.com/problems/generate-parentheses/?envType=study-plan-v2&envId=top-interview-150

/**
*! Given n pairs of parentheses, write a function to generate all combinations of 
*! well-formed parentheses.

 

** Example 1:
** 
** Input: n = 3
** Output: ["((()))","(()())","(())()","()(())","()()()"]
** Example 2:
** 
** Input: n = 1
** Output: ["()"]
 

*? Constraints:
*? 
*? 1 <= n <= 8
 */

/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
    const path = new Array(n * 2).fill("(", 0, n).fill(")", n, n * 2);
    const res = [];
    const visited = new Set();
    const dfs = (path, permutation) => {
        if (permutation.length === path.length) {
            let open = 0;
            permutation = permutation.join("");
            if(visited.has(permutation)){
                return;
            }
            visited.add(permutation);
            for(let i = 0; i < path.length; i++){
                if(permutation.charAt(i) === "("){
                    open ++;
                }
                else if(permutation.charAt(i) === ")"){
                    open --;
                }
                if(open < 0 || open > n){
                    return;
                }
            }
            if(open !== 0) return
            res.push(permutation);
            return;
        }
        for (let i = 0; i < path.length; i++) {
            permutation.push(path[i]);
            dfs(path, permutation);
            permutation.pop();
        }
    };
    dfs(path, []);
    return res;
};
// var generateParenthesis = function (n) {
//     const path = new Array(n * 2).fill("(", 0, n).fill(")", n, n * 2);
//     const res = [];
//     const visited = new Set();
//     const dfs = (path, permutation) => {
//         if (permutation.length === path.length) {
//             res.push(permutation.join(""));
//             return;
//         }
        
//         const perm = permutation.join("");
//         for (let i = 0; i < path.length; i++) {
//             // console.log(i)
//             let open = 0;
//             if (permutation.length === path.length) {
                
//                 for(const char of permutation){
//                     if(char === "("){
//                         open ++;
//                     }
//                     else if(char === ")"){
//                         open --;
//                     }
//                     if(open < 0 || open > n){
//                         permutation.pop();
//                         return;
//                     }
//                 }
//             }
//             permutation.push(path[i]);
//             if(visited.has(perm)){
//                 permutation.pop();
//                 return;
//             }
//             visited.add(perm);
//             console.log(permutation)
//             dfs(path, permutation);
//             permutation.pop();
//         }
//     };
//     dfs(path, []);
//     console.log(res)
//     return res;
// };
//   console.log("ans")
  console.log(generateParenthesis(5));
