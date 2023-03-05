const groupAnagrams = (strs) => {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const key = word.split('').sort().join('');
    map[key] = map[key] || [];
    map[key].push(word);
  }
  return Object.values(map);
};

strs = ['eat','tea','tan','ate','nat','bat'] // [['bat'],['nat','tan'],['ate','eat','tea']]
console.log(groupAnagrams(strs));