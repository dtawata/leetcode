const removeNthFromEnd = (head, n) => {
  const nodes = [];
  let curr = head;
  while (curr) {
    nodes.push(curr);
    curr = curr.next;
  }
  const targetIdx = nodes.length - n;
  if (targetIdx === 0) return head.next;
  nodes[targetIdx - 1].next = nodes[targetIdx +1] || null;
  return head;
};