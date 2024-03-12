/*
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

The division between two integers always truncates toward zero.

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: 
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

*/

var evalRPN = function(tokens) {
    const resStack = [];
    for(let i = 0; i < tokens.length; i++){
        if(isNaN(tokens[i])){
            let y = resStack.pop();
            let x = resStack.pop();
            if(tokens[i] === "/"){
                resStack.push(Math.trunc(x/y));
            }
            if(tokens[i] === "+"){
                resStack.push(x+y);
            }
            if(tokens[i] === "-"){
                resStack.push(x-y);
            }
            if(tokens[i] === "*"){
                resStack.push(x*y);
            }
            console.log(resStack)
            continue;
        }
        resStack.push(parseInt(tokens[i]));
        console.log(resStack)
    }
    return resStack.pop();
};


const tokens = ["2","1","+","3","*"]
expected: 9
const tokens2 = ["4","13","5","/","+"]
expected: 6
const tokens3 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
expected: 22

console.log(evalRPN(tokens))
console.log(evalRPN(tokens2))
console.log(evalRPN(tokens3))