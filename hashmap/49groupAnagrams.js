// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var groupAnagrams = function (strs) {
    const dict = {};

    for (const str of strs) {
        const sortedStr = str.split("").sort().join("");

        if (dict.hasOwnProperty(sortedStr)) {
            dict[sortedStr].push(str);
        } else {
            dict[sortedStr] = [str];
        }
    }
    return Object.values(dict);
};