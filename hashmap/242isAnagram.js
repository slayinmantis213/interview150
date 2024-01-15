// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?


//mine
var isAnagram = function(s, t) {
    if(t.length !== s.length){
        return false;
    }
    const tMap = {};
    const sMap = {};
    for(let i = 0; i < s.length; i++){
        if(tMap.hasOwnProperty(t[i])){
            tMap[t[i]] ++;
        }
        else{
            tMap[t[i]] = 1;
        }
        if(sMap.hasOwnProperty(s[i])){
            sMap[s[i]] ++;
        }
        else{
            sMap[s[i]] = 1;
        }
    }
    for(let key in tMap){
        if(sMap[key] !== tMap[key]){
            return false;
        }
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"))

//theirs 

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

        const charMap = Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            charMap[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            charMap[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }

        return charMap.every(count => count === 0);
};