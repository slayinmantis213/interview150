var Trie = function () {
    this.dict = new Map();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    if (!this.dict.has(word[0])) {
        this.dict.set(word[0], new Set());
    }
    this.dict.get(word[0]).add(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    const firstChar = word[0];
    if (!this.dict.has(firstChar)) return false;

    return this.dict.get(firstChar).has(word);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    const firstChar = prefix[0];
    if (!this.dict.has(firstChar)) return false;

    const keys = this.dict.get(firstChar).keys();

    for (const word of keys) {
        if (word.length > prefix.length) {
            if (prefix === word.substring(0, prefix.length)) {
                return true;
            }
        }
        if (word === prefix) {
            return true;
        }
    }
    return false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */