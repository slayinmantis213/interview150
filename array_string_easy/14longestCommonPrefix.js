// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// mine 
var longestCommonPrefix = function(strs) {
    if(strs[0].length < 1){
        return "";
    }
    if(strs.length < 2){
        return strs[0];
    }
    let result = "";
    for(let i = 0; i < strs[0].length; i++){ // just need to loop over first word
        for(let j = 1; j < strs.length; j++){ //and check each other word for correlation
            if(strs[0][i] !== strs[j][i]){
                return result;
            }
        }
        result += strs[0][i];
    }
    return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))

// theirs 
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(ans) !== 0) { //learned that .indexOf can be used to check sameness between strings
            ans = ans.substring(0, ans.length - 1);
            if (ans === '') {
                return '';
            }
        }
    }
    return ans;
};