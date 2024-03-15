// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

var deleteDuplicates = function (head) {
    if (!head) return null;
    const arrMap = [[head.val, 1]];

    let curr = head.next;
    let it = 0;

    while (curr) {
      if (arrMap[it][0] === curr.val) {
        arrMap[it][1]++;
        curr = curr.next;
        continue;
      }

      arrMap.push([curr.val, 1]);
      it++;

      curr = curr.next;
    }
    console.log(arrMap);
    const newHead = new ListNode();
    curr = newHead;
    it = 0;

    while (it < arrMap.length) {
      if (arrMap[it][1] > 1) {
        it++;
        continue;
      }
      curr.val = arrMap[it][0];
      it++;
      if (it < arrMap.length) {
        curr.next = new ListNode();
        curr = curr.next;
      }
    }
    head = newHead;
    return head;

//   const sentinel = new ListNode(null, head);
//   let prev = sentinel;

//   while (head) {
//     if (head.next && head.val === head.next.val) {
//       while (head.next && head.val === head.next.val) {
//         head = head.next;
//       }
//       prev.next = head.next;
//     } else {
//       prev = prev.next;
//     }
//     head = head.next;
//   }
//   return sentinel.next;
};