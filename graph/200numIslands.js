// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


var numIslands = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    var dfs = function (grid, row, col) {
        for (const direction of directions) {
            const nextRow = row + direction[0];
            const nextCol = col + direction[1];

            if (
                0 <= nextRow &&
                nextRow < m &&
                0 <= nextCol &&
                nextCol < n &&
                grid[nextRow][nextCol] == "1"
            ) {
                grid[nextRow][nextCol] = "0";
                dfs(grid, nextRow, nextCol);
            }
        }
    };

    let is = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                is++;
                dfs(grid, i, j);
            }
        }
    }
    return is;
};



const grid1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

const grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]
