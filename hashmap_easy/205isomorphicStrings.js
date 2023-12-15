// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters.

// No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

// mine

var isIsomorphic = function(s, t) {
    const tMap = {};
    const sMap = {};
    if(s===t){
        return true;
    }
    for(let i = 0; i < t.length; i++){
        if(!tMap.hasOwnProperty(t[i])){
            tMap[t[i]] = s[i];
        }
        if(!sMap.hasOwnProperty(s[i])){
            sMap[s[i]] = t[i];
        }
        else{
            if(sMap[s[i]] !== t[i]){
                return false;
            }
        }
    }
    if(Object.keys(tMap).length !== Object.keys(sMap).length){
        return false;
    }
    return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("badc", "baba"));


//theirs

// Runtime: 83 ms, faster than 88.18% of JavaScript online submissions for Isomorphic Strings.
// Time Complexity : O(n)
var isIsomorphic = function(s, t) {
    // Base case: for different length of two strings...
    if(s.length != t.length)
        return false;
    // Create two maps for s & t strings...
    const map1 = [256];
    const map2 = [256];
    // Traverse all elements through the loop...
    for(let idx = 0; idx < s.length; idx++){
        // Compare the maps, if not equal, return false...
        if(map1[s.charAt(idx)] != map2[t.charAt(idx)])
            return false;
        // Insert each character if string s and t into seperate map...
        map1[s.charAt(idx)] = idx + 1;
        map2[t.charAt(idx)] = idx + 1;
    }
    return true;    // Otherwise return true...
};