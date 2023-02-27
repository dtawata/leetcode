const isBalanced = (root) => {
  const traverse = (node, depth) => {
    if (!node) return depth;
    const left = traverse(node.left, depth + 1);
    const right = traverse(node.right, depth + 1);
    if (!left || !right || Math.abs(left - right) > 1) return false;
    return Math.max(left, right);
  };
  return !!traverse(root, 1);
};