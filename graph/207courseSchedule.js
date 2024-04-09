// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.

// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.


// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// Input: numCourses = 2, prerequisites = [[1, 0]]
// Explanation: To take course 1, you must first take course 0.

// Input: numCourses = 4, prerequisites = [[1, 0], [2, 1], [3, 2]]
// Explanation: To take course 1, you must first take course 0. Similarly, to take course 2, you must first take course 1. And to take course 3, you must first take course 2.

// Input: numCourses = 3, prerequisites = [[1, 0], [2, 1], [0, 2]]
// Explanation: This case forms a cycle in the prerequisites, making it impossible to finish all courses.

var canFinish = function (numCourses, prerequisites) {
    const dfs = (node, adj, visited, inStack) => {
        if (inStack[node]) return true;
        if (visited[node]) return false;
        visited[node] = true;
        inStack[node] = true;

        for (const neighbor of adj[node]) {
            if (dfs(neighbor, adj, visited, inStack)) {
                return true;
            }
        }
        inStack[node] = false;
        return false;
    };

    const adj = [];
    for (let i = 0; i < numCourses; i++) {
        adj.push([]);
    }

    for (const prereq of prerequisites) {
        adj[prereq[1]].push(prereq[0]);
    }

    const visited = new Array(numCourses).fill(false);
    const inStack = new Array(numCourses).fill(false);

    for (let i = 0; i < numCourses; i++) {
        if (dfs(i, adj, visited, inStack)) {
            return false;
        }
    }
    return true;
};