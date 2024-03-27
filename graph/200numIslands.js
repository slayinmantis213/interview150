// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


var numIslands = function(grid) {
    let is = 0;
    const map = new Map();
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === "1"){
                is++;
                checkRight(j,i);
                checkDown(j,i);
            }
        } 
    }
};

var checkRight = function(x, y){
    while(grid[y][x] === "1"){
        grid[y][x] === "0";
        x++;
    }
}
var checkDown = function(x, y){
    while(grid[y][x] === "1"){
        grid[y][x] === "0";
        y++;
    }

}

const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]

const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]
