
class Node {
    constructor(
        val,
        isLeaf = 1,
        topLeft = null,
        topRight = null,
        bottomLeft = null,
        bottomRight = null
    ) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
}
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
    if (grid.length == 0) return new Node(null, null, null, null, null, null);
    if (grid.length < 2) return new Node(grid[0][0], 1, null, null, null, null);

    const head = new Node(grid[0][0], 1, null, null, null, null);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] == head.val) continue;
            head.isLeaf = 0;
            break;
        }
        if (head.isLeaf == 0) break;
    }

    // if the grid is a leaf, return head
    if (head.isLeaf) return head;

    const mid = Math.floor(grid.length / 2);
    const topLeft = [];
    const topRight = [];
    const bottomLeft = [];
    const bottomRight = [];
    for (let i = 0; i < grid.length; i++) {
        if (i < mid) {
            topLeft.push(grid[i].slice(0, mid));
            topRight.push(grid[i].slice(mid));
        } else {
            bottomLeft.push(grid[i].slice(0, mid));
            bottomRight.push(grid[i].slice(mid));
        }
    }

    head.topLeft = construct(topLeft);
    head.topRight = construct(topRight);
    head.bottomLeft = construct(bottomLeft);
    head.bottomRight = construct(bottomRight);

    return head;
};

const grid1 = [
    [0, 1],
    [1, 0],
];

const grid2 = [
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
];

console.log(construct(grid1));
console.log(construct(grid2));