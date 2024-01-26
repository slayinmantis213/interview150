// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let bool = true;
    if(height.length === 2){
        return area(i,j,j-i);
    }
    while(bool){
        bool = false;
        const width = j - i;
        if(area(i, j, width) < area(i + 1, j, width - 1)){
            i++;
            bool = true;
        }
        if(area(i , j, width) < area(i, j - 1, width - 1)){
            j--;
            bool = true;
        }
    }
    function area(i,j,width){
        return height[i] > height[j] ? height[j] * (width) : height[i] * (width);
    }
    return height[i] > height[j] ? height[j] * (j - i) : height[i] * (j - i);
};

console.log(maxArea([2,3,4,5,18,17,6]));