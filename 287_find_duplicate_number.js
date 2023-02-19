const findDuplicate = (nums) => {
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = nums[slow];
    const step = nums[fast];
    fast = nums[step];
    if (slow === fast) {
      slow = 0;
      break;
    }
  }

  while (true) {
    slow = nums[slow];
    fast = nums[fast];
    if (slow === fast) return slow;
  }

  return null;
};

nums = [1,3,4,2,2] // 2
console.log(findDuplicate(nums));
