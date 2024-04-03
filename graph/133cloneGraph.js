// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.



// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on.

// The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]

// (1)--------(2)
// |           |
// |           |
// |           |
// (4)--------(3)

function cloneGraph (root) {
    let queue = [root];
    let visited = new Map(root.val, new Node(root.val));
    while (queue.length > 0) {
        const n = queue.length;  // get # of nodes in the current level
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            let copy;
            if(visited.has(node.val)){
                copy = visited.get(node.val);
            }
            else{
                copy = new Node(node.val)
                visited.set(node.val, copy);
            }
            for (const neighbor of node.neighbors) {
                if (visited.has(neighbor.val)){
                    copy.neighbors.push(visited.get(neighbor.val))
                    continue;
                } 
                queue.push(neighbor);
                visited.set(neighbor.val, new Node(neighbor.val));
            }
        }
    }
    return visited.get(root.val);
}

