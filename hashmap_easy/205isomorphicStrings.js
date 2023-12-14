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

var isIsomorphic = function(s, t) {
    const map = {};
    if(s===t){
        return true;
    }
    for(let i = 0; i < t.length; i++){
        if(!map.hasOwnProperty(t[i])){
            map[t[i]] = s[i];
        }
    }
    ==== TBC === 
    let compair = ""
    for(let i = 0; i < t.length; i++){
        compair += map[t[i]];
    }
    return compair === s;
};

console.log(isIsomorphic("foo", "bar"));

// The current implementation only considers the mapping from characters in t to characters in s. However, you also need to check the reverse mapping

// (from characters in s to characters in t) to ensure the isomorphism.

// Think about how you can maintain two separate mappings, one for the characters in s to characters in t and another for characters in t to characters in s.

// Make sure to update both mappings when processing characters.

// While building the mappings, consider handling the case where a character in t is already mapped to a different character in s. In an isomorphic relationship,

// each character in one string should map to a unique character in the other string.
