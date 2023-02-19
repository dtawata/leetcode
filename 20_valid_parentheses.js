const isValid = (s) => {
  if (s.length % 2 === 1) return false;
  const map = new Map();
  map.set('(', ')');
  map.set('{', '}');
  map.set('[', ']');

  const stack = [];
  for (const char of s) {
    if (map.has(char)) stack.push(char);
    else if (map.get(stack.pop()) !== char) return false;
  }

  return !stack.length;
};

s = '()[]{}' // true
console.log(isValid(s));