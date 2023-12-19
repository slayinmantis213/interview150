// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

//mine
var isValid = function(s) {
    const braces = {"(": ")", "[": "]", "{": "}"};
    const stack = [];
    for(let char of s){
        if(braces.hasOwnProperty(char)){
            stack.push(char);
        }
        else{
            if(stack.length == 0 || braces[stack[stack.length - 1]] !== char){
                return false;
            }
            else{
                stack.pop();
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid("([])"))


//theirs
var isValid = function(s) {
    // Initialize stack to store the closing brackets expected...
    let stack = [];
    // Traverse each charater in input string...
    for (let idx = 0; idx < s.length; idx++) {
        // If open parentheses are present, push it to stack...
        if (s[idx] == '{') {
            stack.push('}');
        } else if (s[idx] == '[') {
            stack.push(']');
        } else if (s[idx] == '(') {
            stack.push(')');
        }
        // If a close bracket is found, check that it matches the last stored open bracket
        else if (stack.pop() !== s[idx]) {
            return false;
        }
    }
    return !stack.length;
};