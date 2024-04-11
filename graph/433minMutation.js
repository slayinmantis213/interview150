// A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.

// Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.

// For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
// There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.

// Given the two gene strings startGene and endGene and the gene bank bank, return the minimum number of mutations needed to mutate from startGene to endGene.

// If there is no such a mutation, return -1.

// Note that the starting point is assumed to be valid, so it might not be included in the bank.

/**
 
@param {string} startGene
@param {string} endGene
@param {string[]} bank
@return {number}
*/
var minMutation = function (startGene, endGene, bank) {
    // start gene to end gene
    // each step only one character from the string can change
    // in each step the new string needs to be present in bank
    // find shortest path between start and end with each step along the way present in bank.

    const graph = new Map(); // key is string, and value is neighbors
    graph.set(startGene, []);

    for (const mutation of bank) {
        if (!graph.has(mutation)) {
            graph.set(mutation, []);
        }
    }
    if (!graph.has(endGene)) return -1;

    // populate the neighbors
    for (const mutation of graph.keys()) {
        console.log(mutation);
        const split = mutation.split("");
        console.log(split);
        const q = []
    }
}; 