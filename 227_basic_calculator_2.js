const breakdown = (s) => {
  let equation = '';
  let prefix = '';
  let suffix = '';
  let symbol = '';
  for (const char of s) {
    if (char === ' ') continue;
    if (Number(char) || char === '0') {
      if (!symbol) prefix = prefix + char;
      else suffix = suffix + char;
    } else {
      if (!symbol && (char === '+' || char === '-')) {
        equation = equation + prefix + char;
        prefix = '';
      } else if (!symbol && (char === '*' || char === '/')) {
        symbol = char;
      } else if (symbol && char === '+') {
        if (symbol === '*') {
          equation = equation + (Number(prefix) * Number(suffix)) + char;
        } else {
          equation = equation + Math.floor(Number(prefix) / Number(suffix)) + char;
        }
        prefix = '';
        suffix = '';
        symbol = '';
      } else if (symbol && char === '-') {
        if (suffix) {
          if (symbol === '*') {
            equation = equation + (Number(prefix) * Number(suffix)) + char;
          } else {
            equation = equation + Math.floor(Number(prefix) / Number(suffix)) + char;
          }
          prefix = '';
          suffix = '';
          symbol = '';
        } else {
          suffix = char;
        }
      } else if (symbol && (char === '*' || char === '/')) {
        if (symbol === '*') {
          prefix = Number(prefix) * Number(suffix);
          symbol = char;
          suffix = '';
        } else {
          prefix = Math.floor(Number(prefix) / Number(suffix));
          symbol = char;
          suffix = '';
        }
      }
    }
  }
  if (symbol === '*') prefix = Number(prefix) * Number(suffix);
  else if (symbol === '/') prefix = Math.floor(Number(prefix) / Number(suffix));
  return equation + prefix;
};

const calculate = (s) => {
  let total = 0;
  s = breakdown(s);
  let curr = '0';
  let lastSymbol = '+';
  for (const char of s) {
    if (Number(char) || char === '0' || char === '.') {
      curr += char;
    } else {
      if (lastSymbol === '+') {
        total += Number(curr);
      } else {
        total -= Number(curr);
      }
      lastSymbol = char;
      curr = '0';
    }
  }
  if (lastSymbol === '+') return Math.floor(total + Number(curr));
  else return Math.floor(total - Number(curr));
};