// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

var setZeroes = function(matrix) {
    const rows = new Set();
    const cols = new Set();
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0){
                rows.add(i);
                cols.add(j);
            }
        }
    }
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(rows.has(i) || cols.has(j)){
                matrix[i][j] = 0;
            }
        }
    }
};
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
// var setZeroes = function(matrix) {
//     const rows = new Set();
//     const cols = new Set();
//     let j = 0, i = 0;

//     while(i < matrix.length){
//         if(matrix[i][j] === 0){
//             rows.add(i);
//             cols.add(j);
//         }
//         if(j === matrix[0].length- 1){
//             j = 0;
//             i++;
//             continue;
//         }
//         j++;
//     }
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = 0; j < matrix[0].length; j++){
//             if(rows.has(i) || cols.has(j)){
//                 matrix[i][j] = 0;
//             }
//         }
//     }
// };
// console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));

// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]