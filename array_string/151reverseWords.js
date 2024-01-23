// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words.A

// The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"


//mine
var reverseWords = function(s) {
    const arr = s.trim().split(' ');
    let result = "";
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i]){
            if(i === 0){
                result += arr[i];
            }
            else{
                result += arr[i] + " ";
            }
        }
    }
    return result;
};

console.log(reverseWords("  hello world  "))


//theirs
var reverseWords = function(s) {
    // Trim the input string to remove leading and trailing spaces
    let i = 0, j = s.length - 1;
    while (i <= j && s[i] === ' ') i++;   // Find the first non-space character
    while (j >= i && s[j] === ' ') j--;   // Find the last non-space character
    s = s.substring(i, j + 1);            // Extract the trimmed substring

    // Split the trimmed string into words based on spaces
    let words = s.split(/\s+/);            // Tokenize the string into words

    // Initialize the output string
    let out = '';

    // Iterate through the words in reverse order
    for (let k = words.length - 1; k > 0; k--) {
        // Append the current word and a space to the output
        out += words[k] + ' ';
    }

    // Append the first word to the output (without trailing space)
    out += words[0];

    return out;                            // Concatenate the reversed words
};
