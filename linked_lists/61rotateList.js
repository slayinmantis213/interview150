// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:


// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}


var rotateRight = function (head, k) {
    if (!head) return null;
    let curr = head;
    let size = 1;
    while (curr.next) {
        curr = curr.next;
        size++;
    }
    curr.next = head;
    curr = head;
    if (size <= k) {
        k %= size;
    }
    size -= k;
    let i = 1;
    while (i < size) {
        curr = curr.next;
        i++;
    }
    let res = curr.next
    curr.next = null;
    return res;
};


const readList = (head) => {
    runner = head;
    let res = [];
    while (runner) {
        res.push(runner.val);
        runner = runner.next;
    }
    return res;
};

const convertToListNode = (arr) => {
    let head = null;
    let prev = null;

    for (let i = 0; i < arr.length; i++) {
        const newNode = new ListNode(arr[i]);

        if (!head) {
            head = newNode;
            prev = newNode;
        } else {
            prev.next = newNode;
            prev = newNode;
        }
    }

    return head;
};

let head = [1, 2, 3, 4, 5], k = 2

head = convertToListNode(head);

console.log(readList(rotateRight(head, k)));


var rotateRight = function (head, k) {
    if (!head) return null
    let curr = head;

    let count = 1;
    while (curr.next) {
        count++;
        curr = curr.next;
    }

    curr.next = head;

    k = count - k % count

    for (let i = 0; i < k; i++) {
        curr = curr.next;
        head = head.next
    }
    curr.next = null

    return head

};