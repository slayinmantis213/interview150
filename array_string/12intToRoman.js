/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function (num) {
    res = "";
    const map = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ];
    let i = 0;
    while (num > 0) {
        const divisor = map[i][0];
        i++;
        let currNum = Math.floor(num / divisor);
        num -= currNum * divisor;
        while (currNum > 0) {
            res += map[i - 1][1];
            currNum--;
        }
    }
    return res;
};
