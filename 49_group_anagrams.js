const groupAnagrams = (strs) => {
  const map = {};
  for (const word of strs) {
    const count = Array.from({ length: 26 }).fill(0);
    for (const char of word) {
      const key = char.charCodeAt(0) - 97;
      count[key]++;
    }
    const str = count.join('.');
    map[str] = map[str] || [];
    map[str].push(word);
  }
  return Object.values(map);
};

// strs = ['eat','tea','tan','ate','nat','bat'] // [['bat'],['nat','tan'],['ate','eat','tea']]
strs = ['bdddddddddd','bbbbbbbbbbc']
console.log(groupAnagrams(strs));

const groupAnagrams = (strs) => {
  const map = {};
  for (const word of strs) {
    const key = word.split('').sort().join('');
    map[key] = map[key] || [];
    map[key].push(word);
  }
  return Object.values(map);
};