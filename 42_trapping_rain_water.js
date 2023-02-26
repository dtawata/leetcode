const trap = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];
  let total = 0;
  while (left < right) {
    if (maxLeft < maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, height[left]);
      total += maxLeft - height[left];
    } else {
      right--;
      maxRight = Math.max(maxRight, height[right]);
      total += maxRight - height[right];
    }
  }
  return total;
};

height = [0,1,0,2,1,0,1,3,2,1,2,1] // 6
console.log(trap(height));
