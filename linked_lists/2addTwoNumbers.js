// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,

// and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let runner1 = l1;
    let runner2 = l2;
    let carry = 0;
    let res = new ListNode();
    let resRun = res;
    while(runner1 || runner2){
        const val1 = runner1 ? runner1.val : 0;
        const val2 = runner2 ? runner2.val : 0;
        let sum = val1 + val2 + carry;
        carry = 0;
        if(sum >= 10){
            sum %= 10;
            carry = 1;
        }
        resRun.val = sum;
        runner1 = runner1 ? runner1.next : null;
        runner2 = runner2 ? runner2.next : null;
        if(runner1 || runner2){
            resRun.next = new ListNode();
            resRun = resRun.next;
        }
    }
    
    if(carry === 1){
        resRun.next = new ListNode(1, null);
    }
    return res;
};

[8,9,9,0,0,0,1]
Expected
[8,9,9,9,0,0,0,1]
