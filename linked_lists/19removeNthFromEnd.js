// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

var removeNthFromEnd = function (head, n) {
    let runner = head;
    let it = 1;
    const map = new Map();

    while (runner) {
        map.set(it, runner);
        runner = runner.next;
        it++;
    }

    if (map.size <= 1) return null; // Return null if there is only one node in the list

    const nodeToEdit = map.get(it - (n + 1));

    if (!nodeToEdit) {
        // If nodeToEdit is null, it means we need to remove the head of the list
        return head.next;
    }

    nodeToEdit.next = map.get(it - (n - 1)) ? map.get(it - (n - 1)) : null;

    return head;
};