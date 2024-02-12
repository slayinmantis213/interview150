var gameOfLife = function(board) {
    
};

function sum(i,j){
    let sum = 0;
    if(i > 0){
        sum += board[i - 1][j];
    }
    if(j > 0){
        sum += board[i][j - 1];
    }
    if(j < board[0].length - 1){
        sum += board[i][j+1];
    }
    if(i < board.length - 1){
        sum += board[i+1][j];
    }
}