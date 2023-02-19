const permute = (nums) => {
  const res = [];
  const used = {};
  const traverse = (curr) => {
    if (curr.length === nums.length) {
      res.push([...curr]);
      return;
    }

    for (const num of nums) {
      if (used[num]) continue;
      curr.push(num);
      used[num] = true;
      traverse(curr);
      used[num] = false;
      curr.pop();
    }
  };
  traverse([]);
  return res;
};

nums = [1,2,3] // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute(nums));