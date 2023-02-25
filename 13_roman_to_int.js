const romanToInt = (s) => {
  const dict = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  };

  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const prev = dict[s[i + 1]] || 0;
    const curr = dict[s[i]];
    count += curr >= prev ? curr : -curr;
  }
  return count;
};

s = 'LVIII' // 58
console.log(romanToInt(s));