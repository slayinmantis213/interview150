



var snakesAndLadders = function (board) {
    const n = board.length;
    const cells = new Array(n ** 2 + 1);
    let label = 1;
    const columns = [];
    for (let i = 0; i < n; i++) {
        columns.push(i);
    }
    for (let i = n - 1; i >= 0; i--) {
        for (const column of columns) {
            cells[label] = [i, column];
            label++;
        }
        columns.reverse();
    }
    const dist = new Array(n ** 2 + 1).fill(-1);

    let q = [1];
    dist[1] = 0;

    while (q.length > 0) {
        const curr = q.shift();
        const distance = Math.min(curr + 6, n ** 2) + 1;
        for (let i = curr + 1; i < distance; i++) {
            const [row, column] = cells[i];
            const destination = board[row][column] !== -1 ? board[row][column] : i;

            if (dist[destination] == -1) {
                dist[destination] = dist[curr] + 1;
                q.push(destination);
            }
        }
    }
    return dist[n * n];
};

const board = [
    [10, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1],
];

snakesAndLadders(board);

// from collections import deque


// class Solution:
//     def snakesAndLadders(self, board: List[List[int]]) -> int:
//         n = len(board)
//         cells = [None] * (n**2 + 1)
//         label = 1
//         columns = list(range(0, n))
//         for row in range(n - 1, -1, -1):
//             for column in columns:
//                 cells[label] = (row, column)
//                 label += 1
//             columns.reverse()
//         dist = [-1] * (n * n + 1)
//         q = deque([1])
//         dist[1] = 0
//         while q:
//             curr = q.popleft()
//             for next in range(curr + 1, min(curr + 6, n**2) + 1):
//                 row, column = cells[next]
//                 destination = (board[row][column] if board[row][column] != -1
//                                else next)
//                 if dist[destination] == -1:
//                     dist[destination] = dist[curr] + 1
//                     q.append(destination)
//         return dist[n * n]