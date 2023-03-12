const calculate = (s, start = 0) => {
  let total = 0;
  let curr = '0';
  let sign = '+';

  for (let i = start; i < s.length; i++) {
    const char = s[i];
    if (char === ' ') continue;
    if (!isNaN(char)) {
      curr = curr + char;
    } else {
      if (char === '+' || char === '-') {
        if (sign === '+') total += Number(curr);
        else if (sign === '-') total -= Number(curr);
        else if (sign === '*') total *= Number(curr);
        else if (sign === '/') total /= Number(curr);
        sign = char;
        curr = '0';
      } else if (char === '*' || char === '/') {
        let temp = '0';
        i++;
        while (!isNaN(s[i])) {
          if (s[i] !== ' ') temp = temp + s[i];
          i++;
        }
        curr = char === '*' ? Number(curr) * Number(temp) : Math.floor(Number(curr) / Number(temp));
        i--;
      }
    }
  }
  return sign === '+' ? total + Number(curr) : total - Number(curr);
};