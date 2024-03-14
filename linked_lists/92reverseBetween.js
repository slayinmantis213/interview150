// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right,

// and return the reversed list.


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]

// Example 1:

// Input:
// Linked List: 1 -> 2 -> 3 -> 4 -> 5
// Left: 2
// Right: 4
// Expected Output: Reverse the nodes from position 2 to position 4 in the linked list.
// Example 2:

// Input:
// Linked List: 3 -> 5 -> 7 -> 9 -> 11 -> 13
// Left: 1
// Right: 5
// Expected Output: Reverse the nodes from position 1 to position 5 in the linked list.
// Example 3:

// Input:
// Linked List: 8 -> 6 -> 4 -> 2
// Left: 1
// Right: 3



// var reverseBetween = function(head, left, right) {
    //     let i = 1;
//     let current = head;
//     while(current){
    
//         // while(i <= right && i >= left){
    
            
    //             // }
//         current = current.next;
//         i ++;
//     }
// };

// var reverseList = function (head) {
    //     let previous = null;
//     let current = head;
//     while (current) {
    //         const next = current.next;
//         current.next = previous;
//         previous = current;
//         current = next;
//     }
//     return previous;
// };

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var reverseBetween = function (head, left, right) {
    const stackage = [];
    let pos = 1;  
    let current = head;
    while (current) {
        if (pos >= left && pos <= right) {
            stackage.push(current.val)
        }
        if(pos > right){
            break;
        }
        current = current.next;
        pos++;
    }
    current = head;
    pos = 1;
    while (current) {
        if (pos >= left && pos <= right) {
            const p = stackage.pop();
            current.val = p;
        }
        if(pos > right){
            break;
        }
        current = current.next;
        pos++;
    }
    return head;
};

const head = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
);

const readList = (head) => {
    current = head;
    let res = []
    while(current){
        res.push(current.val);
        current = current.next;
    }
    return res;
}
console.log(readList(reverseBetween(head, 2, 4)));