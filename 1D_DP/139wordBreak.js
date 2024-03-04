// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

var wordBreak = function (s, wordDict) {
    const words = new Set(wordDict);
    const queue = [];
    const seen = new Array(s.length + 1).fill(false);
    queue.push(0);

    while (queue.length > 0) {
        const start = queue.shift();
        if (start === s.length) return true;

        for (let end = start + 1; end <= s.length; end++) {
            if (seen[end]) {
                continue;
            }

            if (words.has(s.substring(start, end))) {
                queue.push(end);
                seen[end] = true;
            }
        }
    }
    return false;
};

const wordDict = ["cats", "dog", "sand", "and", "cat", "x"];
const s = "catsandog";

console.log(wordBreak(s, wordDict));
