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


const backtrackEvaluate = (
    graph,
    currNode,
    targetNode,
    accProduct,
    visited
) => {
    visited.set(currNode);
    let ret = -1.0;

    const neighbors = graph.get(currNode);
    if (neighbors.has(targetNode)) {
        ret = accProduct * neighbors.get(targetNode);
    } else {
        for (const pair of neighbors.entries()) {
            const nextNode = pair[0];
            if (visited.has(nextNode)) continue;
            ret = backtrackEvaluate(
                graph,
                nextNode,
                targetNode,
                accProduct * pair[1],
                visited
            );
            if (ret != -1.0) break;
        }
    }
    visited.delete(currNode);
    return ret;
};



var canFinish = function(numCourses, prerequisites) {
    const graph = new Map();
    for(const p of prerequisites){
        if(!graph.has(p[0])){
            graph.set(p[0], new Set())
        }
        if(!graph.has(p[1])){
            graph.set(p[1], new Set())
        }
        graph.get(p[0]).add(p[1]);
    }
    console.log(graph);
    console.log(graph.size)
    if(graph.size > numCourses){
        console.log("too bicc")
        return false;
    }
    for(let i = 0; i < graph.size; i++){
        
    }
}



const prerequisites = [[1, 0], [2, 1], [3, 2]]
const numCourses = 4

// const prerequisites1 = [[1, 0], [2, 1], [0, 2]]
// const numCourses1 = 4

console.log(canFinish(numCourses, prerequisites))