const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (map.has(diff)) return [map.get(diff), i];
    map.set(num, i);
  }
  return null;
};

nums = [2,7,11,15], target = 9 // [0, 1]
console.log(twoSum(nums, target));