// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

var wordPattern = function(pattern, s) {
    s = s.split(" ");
    if(pattern.length !== s.length){
        return false;
    }
    const map = {};
    for(let i = 0; i < s.length; i++){
        if(map.hasOwnProperty(pattern[i])){
            if(map[pattern[i]] !== s[i]){
                return false;
            }
        }
        else if(Object.values(map).indexOf(s[i]) > -1){
            return false
        }
        else{
            map[pattern[i]] = s[i];

        }
    }
    
    return true;
};

console.log(wordPattern("abba", "dog cat cat dog"))
console.log(wordPattern("abba", "dog cat cat fish"))
console.log(wordPattern("aaaa", "dog cat cat dog"))