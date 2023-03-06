const sortColors = (nums) => {
  let first = 0;
  let last = nums.length - 1;
  for (let i = 0; i <= last; i++) {
    const num = nums[i];
    if (num === 0) {
      nums[i] = nums[first];
      nums[first] = num;
      first++;
    } else if (num === 2) {
      nums[i] = nums[last];
      nums[last] = num;
      last--;
      i--;
    }
  }
  return nums;
};

// nums = [2,0,2,1,1,0] // [0,0,1,1,2,2]
nums = nums = [2,0,1]
console.log(sortColors(nums));