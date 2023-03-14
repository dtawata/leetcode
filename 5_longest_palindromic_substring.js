const longestPalindrome = (s) => {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let left = right = i;
    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      if (right - left + 1 >= res.length) res = s.slice(left, right + 1);
      left--;
      right++;
    }
    left = i;
    right = i + 1;
    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      if (right - left + 1 >= res.length) res = s.slice(left, right + 1);
      left--;
      right++;
    }
  }
  return res;
};