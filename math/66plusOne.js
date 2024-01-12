// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.

// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

//mine

//overthinking? probably
var plusOne = function(digits) {
    if(digits[digits.length-1] < 9){
        digits[digits.length-1] += 1;
        return digits;
    }
    let i = digits.length - 1
    while(i >= 0){
        if(digits[i] < 9){
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
        i--;
    }
    if(digits[0] === 0){
        digits.push(0);
        digits[0] = 1;
    }
    return digits;
};

console.log(plusOne([1,9,9]))

//theirs

var plusOne = function(digits) {

    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] === 9) {
            digits[i] = 0
        }
        else {
            digits[i] += 1
            return digits
        }
    }

    return [1, ...digits]
};