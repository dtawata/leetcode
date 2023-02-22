const maxSubArray = (nums) => {
  let max = -Infinity;
  let count = 0;
  for (const num of nums) {
    count += num;
    max = Math.max(max, count);
    if (count < 0) count = 0;
  }
  return max;
};

nums = [-2,1,-3,4,-1,2,1,-5,4] // 6
console.log(maxSubArray(nums));