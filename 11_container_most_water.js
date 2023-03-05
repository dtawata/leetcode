const maxArea = (height) => {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    const curr = (j - i) * Math.min(height[i], height[j]);
    max = Math.max(max, curr);
    if (height[i] <= height[j]) i++;
    else j--;
  }
  return max;
};

height = [1,8,6,2,5,4,8,3,7] // 49
console.log(maxArea(height));