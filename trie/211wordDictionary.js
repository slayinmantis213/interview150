var WordDictionary = function () {
    this.dict = new Set();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    this.dict.add(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    const keys = this.dict.keys();
    let keyTerm = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== ".") {
            keyTerm.push(i);
        }
    }

    for (const term of keys) {
        if (word.length != term.length) continue;
        if (keyTerm.length === 0) return true;

        for (let i = 0; i < keyTerm.length; i++) {
            const idx = keyTerm[i];
            if (word[idx] != term[idx]) {
                break;
            }
            if (i == keyTerm.length - 1) {
                return true;
            }
        }
    }
    return false;
};