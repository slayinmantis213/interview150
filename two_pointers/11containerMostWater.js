// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

var maxArea = function (height) {
    let i = 0,
        j = height.length - 1,
        maxArea = 0;

    while (i < j) {
        maxArea = Math.max(area(i, j, height), maxArea);
        height[i] < height[j] ? i++ : j--;
    }

    return maxArea;
};

var area = function (i, j, height) {
    return height[i] < height[j] ? height[i] * (j - i) : height[j] * (j - i);
};

console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));