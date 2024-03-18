// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.




// Example 1:
// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]


// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let curr = head;
    const left = new ListNode() , right = new ListNode();
    let lRun = left, rRun = right;
    while(curr){
        if(curr.val < x){
            lRun.next = new ListNode();
            lRun = lRun.next;
            lRun.val = curr.val;
        }
        else{
            rRun.next = new ListNode();
            rRun = rRun.next;
            rRun.val = curr.val;
        }
        curr = curr.next;
    }

    lRun.next = right.next;
    return left.next;
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

let head = [1,4,3,2,5,2], x = 3

head = convertToListNode(head);

console.log(readList(partition(head, x)))