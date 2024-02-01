// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

// mine
var canConstruct = function(ransomNote, magazine) {
    const magMap = {};
    const ranMap = {};
    if(ransomNote.length > magazine.length){
        return false;
    }
    for(let i = 0; i < magazine.length; i++){
        if(magMap.hasOwnProperty(magazine[i])){
            magMap[magazine[i]]++;
        }
        else{
            magMap[magazine[i]] = 1;
        }
        if( i < ransomNote.length){
            if(ranMap.hasOwnProperty(ransomNote[i])){
                ranMap[ransomNote[i]]++;
            }
            else{
                ranMap[ransomNote[i]] = 1;
            }
        }
    }
    for(let key in ranMap){
        if(!magMap.hasOwnProperty(key)){
            return false;
        }
        else{
            if(ranMap[key] > magMap[key]){
                return false;
            }
        }
    }
    return true;
};

console.log(canConstruct("aab" , "baa"))

// theirs

const canConstruct = (ransomNote, magazine) => {
    const vocab = {};
    
    for (let letter of magazine) {
        vocab[letter] = ++vocab[letter] || 1;
    }
    
    for (let letter of ransomNote) {
        if (vocab[letter] === 0 || !vocab[letter]) {
            return false;
        }
        vocab[letter]--;
    }
    
    return true;
};