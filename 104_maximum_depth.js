const maxDepth = (root, depth = 1) => {
  if (!root) return depth - 1;
  const left = maxDepth(root.left, depth + 1);
  const right = maxDepth(root.right, depth + 1);
  return Math.max(left, right);
};

root = [3,9,20,null,null,15,7] // 3
console.log(maxDepth(root));