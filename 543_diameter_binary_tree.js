const diameterOfBinaryTree = (root) => {
  let max = 0;
  const traverse = (node, depth) => {
    if (!node) return depth - 1;
    const left = traverse(node.left, depth + 1);
    const right = traverse(node.right, depth + 1);
    const diameter = (left - depth) + (right - depth);
    max = Math.max(max, diameter);
    return Math.max(left, right);
  };
  traverse(root, 0);
  return max;
};
