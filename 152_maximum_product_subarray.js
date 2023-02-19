const maxProduct = (nums) => {
  let res = -Infinity;
  let max = 1;
  let min = 1;
  for (const num of nums) {
    if (num === 0) {
      max = 1;
      min = 1;
      res = Math.max(res, 0);
      continue;
    }
    const temp = num * max;
    max = Math.max(num, num * min, temp);
    min = Math.min(num, num * min, temp);
    res = Math.max(res, max);
  }
  return res;
};

// const nums = [2,3,-2,4]; // 6
const nums = [3,-1,4]; // 4
console.log(maxProduct(nums));