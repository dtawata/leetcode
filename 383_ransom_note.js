const canConstruct = (ransomNote, magazine) => {
  if (ransomNote.length > magazine.length) return false;
  const map = {};
  for (const char of magazine) {
    map[char] = map[char] || 0;
    map[char]++;
  }

  for (const char of ransomNote) {
    if (map[char]) map[char]--;
    else return false;
  }

  return true;
};