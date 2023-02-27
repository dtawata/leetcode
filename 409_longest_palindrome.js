const longestPalindrome = (s) => {
  const map = {};
  for (const char of s) {
    map[char] = map[char] ? map[char] + 1 : 1;
  }

  let count = 0;
  let odd = false;
  for (const key in map) {
    const val = map[key];
    if (val % 2 === 1) odd = true;
    count += Math.floor(val/2) * 2;
  }

  return odd ? count + 1 : count;
};

s = 'abccccdd' // 7
console.log(longestPalindrome(s));