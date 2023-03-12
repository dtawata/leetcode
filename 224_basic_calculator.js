// const add = (equation) => {
//   equation = equation.join('').split('');
//   let total = 0;
//   let num = '0';
//   let symbol = '+';
//   for (let i = 0; i < equation.length; i++) {
//     const char = equation[i];
//     if (char === ' ') continue;
//     else if (Number(char) || Number(char) === 0) num = num + char;
//     else {
//       if (symbol === '-' && equation[i - 1] === '-') {
//         symbol = '+';
//         continue;
//       }
//       if (symbol === '+') total += Number(num);
//       else if (symbol === '-') total -= Number(num);
//       else if (symbol === '*') total *= Number(num);
//       else if (symbol === '/') total /= Number(num);
//       symbol = char;
//       num = '0';
//     }
//   }
//   if (symbol === '+') total += Number(num);
//   else if (symbol === '-') total -= Number(num);
//   else if (symbol === '*') total *= Number(num);
//   else if (symbol === '/') total /= Number(num);
//   return total;
// };

// const calculate = (s) => {
//   s = s.replace(/ /g,'').split('');
//   const start = [];
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     if (char === '(') {
//       start.push(i);
//     }
//     else if (char === ')') {
//       const open = start.pop();
//       const end = i;
//       const temp = add(s.slice(open + 1, end));
//       s.splice(open, end - open + 1, temp);
//       i -= end - open;
//     }
//   }
//   return add(s);
// };

const calculate = (s, start = 0) => {
  let total = 0;
  let curr = '0';
  let sign = '+';

  for (let i = start; i < s.length; i++) {
    const char = s[i];
    if (char === ' ') continue;
    if (char === ')') return sign === '+' ? [total + Number(curr), i] : [total - Number(curr), i];
    if (Number(char) || Number(char) === 0) {
      curr = curr + char;
    } else if (char === '(') {
      [curr, i] = calculate(s, i + 1);
    } else {
      if (sign === '+') total += Number(curr);
      else if (sign === '-') total -= Number(curr);
      sign = char;
      curr = '0';
    }
  }
  return sign === '+' ? total + Number(curr) : total - Number(curr);
};

s = "(1+(4+5+2)-3)+(6+8)" // 23
// s = '1 + 1'
console.log(calculate(s));