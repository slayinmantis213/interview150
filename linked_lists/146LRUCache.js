class DLLNode {
    constructor(key, val, next, pred) {
        this.val = val;
        this.pred = pred;
        this.next = next;
        this.key = key;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    // keep track of count
    //
    this.map = new Map();
    this.capacity = capacity;
    this.head = null;
    this.tail = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);

    if (node.key === this.head.key) {
        return this.head.val;
    }

    let pred = node.pred;
    let next = node.next;
    pred.next = next;

    if (!next) {
        this.tail = pred;
    } else {
        next.pred = pred;
    }

    node.pred = null;
    this.head.pred = node;
    node.next = this.head;
    this.head = node;

    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    const node = new DLLNode(key, value, null, null);
    if (!this.map.has(key)) {
        if (this.map.size === 0) {
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.pred = node;
        }
        this.head = node;
        this.map.set(key, node);
    } else {
        // move kvp to head
        const curr = this.map.get(key);
        curr.val = value
        const pred = curr.pred;
        const next = curr.next;
        if (pred) {
            pred.next = next;
            if (!next) {
                this.tail = pred
            }
            else {
                next.pred = pred;
            }
            curr.pred = null;
            this.head.pred = curr;
            curr.next = this.head;
            this.head = curr;
        }
        this.map.set(key, curr);
    }

    if (this.map.size > this.capacity) {
        this.map.delete(this.tail.key);
        this.tail = this.tail.pred;
        this.tail.next = null;
    }
};