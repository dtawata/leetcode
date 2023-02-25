const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const map = {};
  for (const char of s) {
    map[char] = map[char] || 0;
    map[char]++;
  }
  for (const char of t) {
    if (!map[char]) return false;
    map[char]--;
  }
  return true;
};

s = 'anagram', t = 'nagaram' // true
console.log(isAnagram(s, t));


// const isAnagram = (s, t) => {
//   if (s.length !== t.length) return false;
//   const map = new Map();

//   for (const char of s) {
//     if (map.has(char)) map.set(char, map.get(char) + 1);
//     else map.set(char, 1);
//   }

//   for (const char of t) {
//     if (!map.get(char)) return false;
//     map.set(char, map.get(char) - 1);
//   }

//   return true;
// };