// const threeSum = (nums) => {
//   nums = nums.sort((a, b) => a - b);
//   const map = {};
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     map[num] = map[num] || 0;
//     map[num]++;
//   }

//   const res = [];
//   for (let i = 0; i < nums.length; i++) {
//     const neg = nums[i];
//     if (neg === nums[i - 1]) continue;
//     if (neg >= 0) break;
//     for (let j = nums.length - 1; j >= 0; j--) {
//       const pos = nums[j];
//       if (pos === nums[j + 1]) continue;
//       if (pos <= 0) break;
//       const target = (neg + pos) * -1;
//       if (target === pos) {
//         if (map[pos] >= 2) {
//           res.push([neg, target, pos]);
//         }
//       } else if (map[target] && target >= 0 && target <= pos) {
//         res.push([neg, target, pos]);
//       }
//     }
//   }

//   for (let i = nums.length - 1; i >= 0; i--) {
//     const pos = nums[i];
//     if (pos === nums[i +1]) continue;
//     if (pos <= 0) break;
//     for (let j = 0; j < nums.length; j++) {
//       const neg = nums[j];
//       if (neg === nums[j - 1]) continue;
//       if (neg >= 0) break;
//       const target = (neg + pos) * -1;
//       if (target === neg) {
//         if (map[neg] >= 2) {
//           res.push([neg, target, pos]);
//         }
//       } else if (map[target] &&  target < 0 && target >= neg) {
//         res.push([neg, target, pos]);
//       }
//     }
//   }
//   if (map[0] >= 3) res.push([0, 0, 0]);
//   return res;
// };


// const threeSum = (nums) => {
//   nums = nums.sort((a, b) => a - b);
//   const results = [];
//   let i = 0;
//   let j = i + 1;
//   let k = nums.length - 1;
//   while (nums[i] < 1) {
//     if (nums[k] === nums[k + 1]) {
//       k--;
//       continue;
//     }
//     if (nums[i] === nums[i - 1] || j >= k) {
//       i++;
//       j = i + 1;
//       k = nums.length - 1;
//       continue;
//     }
//     const sum = nums[i] + nums[j] + nums[k];
//     if (sum === 0) {
//       results.push([nums[i], nums[j], nums[k]]);
//       k--;
//     } else if (sum > 0) {
//       k--;
//     } else {
//       j++;
//     }
//   }
//   return results;
// };


const threeSum = (nums) => {
  nums = nums.sort((a, b) => a - b);
  const res = [];
  let i = 0;
  let j = i + 1;
  let k = nums.length - 1;
  while (nums[i] < 1) {
    if (j >= k) {
      i++;
      j = i + 1;
      k = nums.length - 1;
      continue;
    }
    const sum = nums[i] + nums[k] + nums[j];
    if (sum === 0) {
      res.push([nums[i], nums[j], nums[k]]);
      k--;
    } else if (sum > 0) {
      k--;
    } else if (sum < 0) {
      j++;
    }
  }
  return res;
};

nums = [-1,0,1,2,-1,-4] // [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums));
