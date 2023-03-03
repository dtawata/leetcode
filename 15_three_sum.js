const threeSum = (nums) => {
  nums = nums.sort((a, b) => a - b);
  const res = [];
  let i = 0;
  let j = i + 1;
  let k = nums.length - 1;

  while (nums[i] < 1) {
    if (nums[k] === nums[k + 1]) {
      k--;
      continue;
    }
    if (nums[i] === nums[i - 1] || j >= k) {
      i++;
      j = i + 1;
      k = nums.length - 1;
      continue;
    }
    const sum = nums[i] + nums[j] + nums[k];
    if (sum > 0) k--;
    else if (sum < 0) j++;
    else {
      res.push([nums[i], nums[j], nums[k]]);
      k--;
    }
  }
  return res;
};

nums = [-1,0,1,2,-1,-4] // [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums));
