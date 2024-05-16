function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var sortList = function (head) {
  function sortedMerge( a,  b) 
  {
      var result = null;
      if (a == null)
          return b;
      if (b == null)
          return a;

      if (a.val <= b.val) {
          result = a;
          result.next = sortedMerge(a.next, b);
      } else {
          result = b;
          result.next = sortedMerge(a, b.next);
      }
      return result;
  }

  function mergeSort( h) {
      if (h == null || h.next == null) {
          return h;
      }

      var middle = getMiddle(h);
      var nextofmiddle = middle.next;

      middle.next = null;
      var left = mergeSort(h);

      var right = mergeSort(nextofmiddle);

      var sortedlist = sortedMerge(left, right);
      return sortedlist;
  }

  function getMiddle( head) {
      if (head == null)
          return head;

      var slow = head, fast = head;

      while (fast.next != null && fast.next.next != null) 
      {
          slow = slow.next;
          fast = fast.next.next;
      }
      return slow;
  }
  return mergeSort(head);
};


