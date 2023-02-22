const backspaceCompare = (s, t) => {
  let i = s.length - 1;
  let j = t.length - 1;
  let iRemove = 0;
  let jRemove = 0;

  while (i >= 0 || j >= 0) {
    while (s[i] === '#' || iRemove) {
      if (s[i] === '#') iRemove++;
      else iRemove--;
      i--;
    }

    while (t[j] === '#' || jRemove) {
      if (t[j] === '#') jRemove++;
      else jRemove--;
      j--;
    }

    if (s[i] !== t[j]) return false;
    i--;
    j--;
  }

  return true;
};

s = 'ab#c', t = 'ad#c' // true
console.log(backspaceCompare(s, t));