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
    const graph = new Map(); // key is string, and value is neighbors
    graph.set(startGene, new Set());

    for (const mutation of bank) {
        if (!graph.has(mutation)) {
            graph.set(mutation, new Set());
        }
    }
    if (!graph.has(endGene)) return -1;

    // populate the neighbors
    const splits = [];
    for (const mutation of graph.keys()) {
        const split = mutation.split("");
        splits.push(split);
    }
    for (let i = 0; i < splits.length; i++) {
        for (let j = i + 1; j < splits.length; j++) {
            const count = compareStrings(splits[i], splits[j]);
            if (count !== 1) {
                continue;
            }
            graph.get(splits[i].join("")).add(splits[j].join(""));
            graph.get(splits[j].join("")).add(splits[i].join(""));
        }
    }
    if (graph.get(startGene).has(endGene)) {
        return 1;
    }

    let count = 0;
    const q = [startGene];
    const visited = new Set();
    visited.add(startGene);
    while (q.length > 0) {
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let curr = q.shift();
            if (curr === endGene) {
                return count;
            }

            const node = graph.get(curr);
            for (const mutation of node.keys()) {
                if (visited.has(mutation)) continue;
                // if (mutation === endGene) {
                //   return count;
                // }
                // console.log(mutation);
                q.push(mutation);
                visited.add(mutation);
            }
        }
        count++;
    }
    return -1;
};

const compareStrings = (splits1, splits2) => {
    let count = 0;
    for (let i = 0; i < splits1.length; i++) {
        if (splits1[i] !== splits2[i]) {
            count++;
        }
        if (count > 1) {
            break;
        }
    }
    return count;
};

const startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA", "AACCGCTA", "AAACGGTA"]


const startGene1 =
    "AAAAACCC",
    endGene1 =
        "AACCCCCC",
    bank1 =
        ["AAAACCCC", "AAACCCCC", "AACCCCCC"]

console.log(minMutation(startGene1, endGene1, bank1))

var stepsToEndFromStart = function (startGene, endGene) {
    const startSplit = startGene.split("");
    const endSplit = endGene.split("");
    let count = 0;
    for (let i = 0; i < startSplit.length; i++) {
        startSplit[i] !== endSplit[i] && count++;
    }
    return count;
};