var solve = function (board) {
    const m = board.length;
    const n = board[0].length;
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    const bfs = (board, row, col) => {
        let hasMetEdge = false;
        let modifiedBoard = [];
        for (const arr of board) {
            modifiedBoard.push([...arr]);
        }
        modifiedBoard[row][col] = "X"
        const queue = [];
        queue.push([row, col]);
        while (queue.length > 0 && !hasMetEdge) {
            const curr = queue.shift();
            for (const direction of directions) {
                const nextRow = curr[0] + direction[0];
                const nextCol = curr[1] + direction[1];
                if (0 <= nextRow && nextRow < m && 0 <= nextCol && nextCol < n) {
                    if (modifiedBoard[nextRow][nextCol] == "O") {
                        modifiedBoard[nextRow][nextCol] = "X";
                        queue.push([nextRow, nextCol]);
                    }
                } else {
                    hasMetEdge = true;
                    break;
                }
            }
        }
        return hasMetEdge ? board : modifiedBoard;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "O") {
                const newBoard = bfs(board, i, j);
                for (let i = 0; i < newBoard.length; i++) {
                    board[i] = newBoard[i]
                }
            }
        }
    }
    return board;
};