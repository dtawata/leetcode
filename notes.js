// let result = Math.max(...nums);
const maxSubArray = (nums) => {
  let max = -Infinity;
  let curr = 0;
  for (const num of nums) {
    curr += num;
    max = Math.max(max, curr);
    if (curr < 0) curr = 0;
  }
  return max;
};