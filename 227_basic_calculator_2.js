const calculate = (s, start = 0) => {
  let total = 0;
  let curr = '0';
  let plus = true;

  for (let i = start; i < s.length; i++) {
    const char = s[i];
    if (char === ' ') continue;
    if (!isNaN(char)) {
      curr += char;
    } else if (char === '+' || char === '-') {
      total = plus ? total + Number(curr) : total - Number(curr);
      plus = char === '+';
      curr = '0';
    } else if (char === '*' || char === '/') {
      let temp = '0';
      i++;
      while (!isNaN(s[i])) {
        if (s[i] !== ' ') temp += s[i];
        i++;
      }
      curr = char === '*' ? Number(curr) * Number(temp) : Math.floor(Number(curr) / Number(temp));
      i--;
    }
  }
  return plus ? total + Number(curr) : total - Number(curr);
};