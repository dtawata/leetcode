const reverseList = (head) => {
  let reversed = null;
  while (head) {
    const temp = head.next;
    head.next = reversed;
    reversed = head;
    head = temp;
  }
  return reversed;
};

head = [1,2,3,4,5] // [5,4,3,2,1]
console.log(reverseList(head));