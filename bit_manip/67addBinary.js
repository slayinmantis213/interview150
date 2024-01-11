// Given two binary strings a and b, return their sum as a binary string.
// Add each pair of bits: Add the corresponding bits from both numbers along with any carry from the previous addition.

// Start from the right: Begin adding the digits from the rightmost side (the least significant bit) to the leftmost side.

// Add each pair of bits: Add the corresponding bits from both numbers along with any carry from the previous addition.

// 0 + 0 = 0
// 0 + 1 = 1
// 1 + 0 = 1
// 1 + 1 = 0 (and carry a 1 to the next higher bit)
// Handle carries: If there is a carry after adding the bits, add it to the sum of the next pair of bits.

// Continue to the left: Repeat the process for each pair of bits until you reach the leftmost side.

// Check for any remaining carry: After you finish adding the bits, if there is still a carry, include it as the leftmost bit.

Input: a = "1010", b = "1011"
Output: "10101"

//mine
var addBinary = function (a, b) {
    let dif = Math.abs(a.length - b.length)
    if (a.length > b.length) {
        b = "0".repeat(dif) + b;
    }
    if (b.length > a.length) {
        a = "0".repeat(dif) + a;
    }
    let carry = false;
    let result = "";
    for (let i = a.length - 1; i >= 0; i--) {
        const sum = Number(a[i]) + Number(b[i])
        if (sum === 2) {
            if (carry) {
                result = "1" + result;
            }
            else {
                result = "0" + result;
                carry = true;
            }
        }
        if (sum === 1) {
            if (carry) {
                result = "0" + result;
            }
            else {
                result = "1" + result;
            }
        }
        if (sum === 0) {
            if (carry) {
                result = "1" + result;
                carry = false;
            }
            else {
                result = "0" + result;
            }
        }
    }
    if (carry) return "1" + result;
    return result;
};
console.log(addBinary("1111111111", "1"));


//theirs

let addBinary = (a, b) => {
    // Truth Table
    // 1st + 2nd + carry = sum, new carry, decimal sum
    //   0 +  0  + 0 = 0, 0 (0)
    //   0 +  0  + 1 = 1, 0 (1)
    //   0 +  1  + 1 = 0, 1 (2)
    //   1 +  1  + 1 = 1, 1 (3)

    let carry = 0;
    let result = '';

    let len1 = a.length - 1;
    let len2 = b.length - 1;

    for (; len1 >= 0 || len2 >= 0 || carry > 0; len1--, len2--) {
        let sum = (+a[len1] || 0) + (+b[len2] || 0) + carry;//?????!!!
        if (sum > 1) {
            sum = sum % 2;
            carry = 1;
        } else {
            carry = 0;
        }
        result = `${sum}${result}`;
    }
    return result;
};