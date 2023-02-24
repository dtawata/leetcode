const isPalindrome = (s) => {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i <= j) {

    while (i < j) {
      const char = s.charCodeAt(i);
      if ((char >= 48 && char < 58) || (char >= 97 && char < 123)) break;
      i++;
    }

    while (j > i) {
      const char = s.charCodeAt(j);
      if ((char >= 48 && char < 58) || (char >= 97 && char < 123)) break;
      j--;
    }

    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
};

s = 'A man, a plan, a canal: Panama' // true
console.log(isPalindrome(s));