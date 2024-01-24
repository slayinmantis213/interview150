// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

var convert = function (s, numRows) {
    if (numRows <= 1 || s.length <= numRows) return s;
    let rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push([]);
    }

    let currRow = 0;
    let step = 1;

    for (const c of s) {
        rows[currRow].push(c);
        currRow += step;
        if (currRow == 0 || currRow == numRows - 1) {
            step = -step;
        }
    }
    let result = "";
    for (const row of rows) {
        result += row.join("");
    }
    return result;
};