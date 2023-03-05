const lengthOfLongestSubstring = (s) => {
  const map = new Map();
  let max = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char)) start = Math.max(start, map.get(char) + 1);
    map.set(char, i);
    max = Math.max(max, i - start + 1);
  }
  return max;
};

s = 'abcabcbb' // 3
console.log(lengthOfLongestSubstring(s));