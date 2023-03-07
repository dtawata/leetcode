const canPartition = (nums) => {
  let count = 0;
  for (const num of nums) {
    count += num;
  }
  if (count % 2 === 1) return false;
  const target = count / 2;
  const set = new Set();
  set.add(0);
  for (const num1 of nums) {
    for (const num2 of Array.from(set)) {
      const sum = num1 + num2;
      if (sum === target) return true;
      set.add(sum);
    }
  }
  return false;
};

nums = [2,2,1,1]
console.log(canPartition(nums));


// const canPartition = (nums) => {
//   let count = 0;
//   for (const num of nums) {
//     count += num;
//   }
//   if (count % 2 === 1) return false;
//   const target = count / 2;
//   const set = new Set();
//   set.add(0);
//   for (const num1 of nums) {
//     for (const num2 of Array.from(set)) {
//       const sum = num1 + num2;
//       set.add(sum);
//     }
//   }
//   return set.has(target);
// };