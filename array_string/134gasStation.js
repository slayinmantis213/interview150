// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station.

// You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's

// index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
var canCompleteCircuit = function (gas, cost) {

    diffs = [];
    for (let i = 0; i < gas.length; i++) {
        diffs.push(gas[i] - cost[i]);
    }
    const sum = diffs.reduce((acc, curr) => acc + curr, 0);
    if (sum < 0) return -1;

    let start = 0;
    let total = 0;
    for (let i = 0; i < diffs.length; i++) {
        total += diffs[i];
        if (total < 0) {
            start = i + 1;
            total = 0;
        }
    }
    for (let j = 0; j < start; j++) {
        total += diffs[j];
        if (total < 0) {
            return -1;
        }
    }
    return start;
};
console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]));

[5, 1, 2, 3, 4]
[4, 4, 1, 5, 1]
// Now, you need to find the starting index where you can begin the journey.
// Iterate through the diff array again, and find the index where the cumulative sum becomes non-negative after reaching the end of the array (considering it as a circular route).