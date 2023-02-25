const search = (nums, target, start = 0, end = nums.length - 1) => {
  if (start > end) return -1;
  const mid = Math.floor((start + end)/2);
  if (target < nums[mid]) return search(nums, target, start, mid - 1);
  if (target > nums[mid]) return search(nums, target, mid + 1, end);
  return mid;
};

nums = [-1,0,3,5,9,12], target = 9 // 4
console.log(search(nums, target));