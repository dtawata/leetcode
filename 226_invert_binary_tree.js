const invertTree = (root) => {
  if (!root) return root;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

root = [4,2,7,1,3,6,9] // [4,7,2,9,6,3,1]
console.log(invertTree(root));


// const invertTree = (root) => {
//   if (!root) return root;
//   const queue = [root];
//   while (queue.length) {
//     const node = queue.shift();
//     const temp = node.left;
//     node.left = node.right;
//     node.right = temp;
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }
//   return root;
// };