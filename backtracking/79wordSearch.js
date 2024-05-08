
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    // check if current letter is valid next letter
    // if it is add it to string,
    // if it isn't remove previous letter
    // increment x or y
    // recurrsive call
  
    const dfs = (pos, x, y, word) => {
      if (board[x][y] === word.charAt(pos)) {
        dfs(pos + 1, x, y, word);
      }
    };
  
    dfs(0, 0, 0, word);
  
    // const dfs = (str, x, y, visited) => {
    //   console.log(str);
    //   if (visited.has(`${x}, ${y}`)) {
        //     console.log("I AM HERE");
    //     return;
    //   }
    //   visited.add(`${x}, ${y}`);
    //   if (str === word) return true;
  
    //   console.log("x", x);
    //   console.log("y", y);
    
    //   if (x > 0) {
    //     dfs(str + board[x][y], x - 1, y, visited);
    //   }
    //   if (y > 0) {
        //     dfs(str + board[x][y], x, y - 1, visited);
    //   }
    //   if (y < board[0].length - 1) {
    //     dfs(str + board[x][y], x, y + 1, visited);
    //   }
    //   if (x < board.length - 1) {
    //     dfs(str + board[x][y], x + 1, y, visited);
    //   }
    
    //   return false;
    // };
    // // console.log("before exists runs");
    // let exists = dfs("", 0, 0, new Set());
    // // console.log("we made it passed with exists as", exists);
    // return exists;
};
var exist = function(board, word) {
    for(let y = 0; y < board.length; y++){
        for(let x = 0; x < board[0].length; x++){
            if(board[y][x] === word[0]){
                if(dfs(board, x, y, word, board[y][x], new Set())){
                    return true;
                }
            }
        } 
    }
    function dfs(board, x, y, word, str, visited){
        if (visited.has(`${y}, ${x}`)) {
            console.log(`im here ${y} , ${x}`)
            console.log(str)
            return;
        }
        visited.add(`${y}, ${x}`);
        // console.log(visited.keys())
        const pos = str.length; 
        // console.log(word[pos])
        if(str === word){
            return true;
        }
        // console.log(str)
        if(board[y + 1]){
            if(board[y + 1][x]){
                if(board[y + 1][x] === word[pos]){
                    if(dfs(board, x, y + 1, word, str + board[y + 1][x], visited)){
                        return true;
                    }
                }
            }
        }
        if(board[y - 1]){
            if(board[y - 1][x]){
                if(board[y - 1][x] === word[pos]){
                    if(dfs(board, x, y - 1, word, str + board[y - 1][x], visited)){
                        return true;
                    }
                }
            }
        }
        if(board[y][x + 1]){
            if(board[y][x + 1] === word[pos]){
                if(dfs(board, x + 1, y, word, str + board[y][x + 1], visited)){
                    return true;
                }
            }
        }
        if(board[y][x - 1]){
            if(board[y][x - 1] === word[pos]){
                if(dfs(board, x - 1, y, word, str + board[y][x - 1], visited)){
                    return true;
                }
            }
        }
        return false;
    }
    return false;
};

  const board = [
    ["A","B","C","E"],
    ["S","F","E","S"],
    ["A","D","E","E"]
  ];
  const word = "ABCESEEEFS";
  
  console.log(exist(board, word));