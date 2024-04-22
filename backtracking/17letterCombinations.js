const KEYBOARD = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
};

function dfs(startIndex, path, res, digits) {
    if (startIndex === digits.length) {
        res.push(path.join(''));
        return;
    }
    let nextNumber = digits.charAt(path.length);
    for (let letter of KEYBOARD[nextNumber]) {
        path.push(letter);
        dfs(startIndex + 1, path, res, digits);
        path.pop();
    }
}

function letterCombinations(digits) {
    let res = [];
    dfs(0, [], res, digits);
    return res;
}

const digits = "2354"

console.log(letterCombinations(digits))