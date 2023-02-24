const majorityElement = (nums) => {
  let majority;
  let count = 0;
  for (const num of nums) {
    if (!count) majority = num;
    count += num === majority ? 1 : -1;
  }
  return majority;
};

nums = [3,2,3] // 3
console.log(majorityElement(nums));