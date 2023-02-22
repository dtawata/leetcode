const mergeTwoLists = (list1, list2) => {
  if (!list1) return list2;
  if (!list2) return list1;

  let head, tail;
  if (list1.val <= list2.val) {
    head = list1;
    tail = list1;
    list1 = list1.next;
  } else {
    head = list2;
    tail = list2;
    list2 = list2.next;
  }

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      tail = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      tail = list2;
      list2 = list2.next;
    }
  }

  tail.next = list1 ? list1 : list2;
  return head;
};

list1 = [1,2,4], list2 = [1,3,4] // [1,1,2,3,4,4]
console.log(mergeTwoLists(list1, list2));