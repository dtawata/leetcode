const productExceptSelf = (nums) => {
  const res = [];

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    res.push(prefix);
    prefix *= num;
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    res[i] *= suffix;
    suffix *= num;
  }

  return res;
};

const nums = [1,2,3,4]; // [24,12,8,6]
console.log(productExceptSelf(nums));