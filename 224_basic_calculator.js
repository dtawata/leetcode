const calculate = (s, start = 0) => {
  let total = 0;
  let curr = '0';
  let plus = true;

  for (let i = start; i < s.length; i++) {
    const char = s[i];
    if (char === ' ') continue;
    if (char === ')') return plus ? [total + Number(curr), i] : [total - Number(curr), i];
    if (!isNaN(char)) {
      curr = curr + char;
    } else if (char === '(') {
      [curr, i] = calculate(s, i + 1);
    } else {
      total = plus ? total + Number(curr) : total - Number(curr);
      plus = char === '+';
      curr = '0';
    }
  }
  return plus ? total + Number(curr) : total - Number(curr);
};

s = "(1+(4+5+2)-3)+(6+8)" // 23
// s = '1 + 1'
console.log(calculate(s));