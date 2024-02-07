// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Input: matrix = [
[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
// ]


var spiralOrder = function (matrix) {
    const res = [];
    let top = 0,
        left = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i]);
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left]);
        }
        left++;
    }

    res.length = matrix.length * matrix[0].length;
    return res;
};

// const matrix = [[1,2,3],[4,5,6],[7,8,9]];
const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
console.log(spiralOrder(matrix))
// [1,2,3,4,8,12,11,10,9,5,6,7]

var spiralOrder = function (matrix) {
    var m = matrix.length, n = matrix[0].length;
    var row_s = 0, row_e = m;
    var col_s = 0, col_e = n
    var arr = [];

    var i = row_s, j = col_s;
    while (row_s < row_e && col_s < col_e) {
        for (j = col_s; j < col_e; j++) arr.push(matrix[i][j]);
        j--;
        row_s++;
        if (row_s >= row_e || col_s >= col_e) break;

        for (i = row_s; i < row_e; i++) arr.push(matrix[i][j]);
        i--;
        col_e--;
        if (row_s >= row_e || col_s >= col_e) break;

        for (j = col_e - 1; j >= col_s; j--) arr.push(matrix[i][j]);
        j++;
        row_e--;
        if (row_s >= row_e || col_s >= col_e) break;

        for (i = row_e - 1; i >= row_s; i--) arr.push(matrix[i][j]);
        i++;
        col_s++;
        if (row_s >= row_e || col_s >= col_e) break;
    }
    return arr;
};