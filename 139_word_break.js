const wordBreak = (s, wordDict) => {
  const table = new Array(s.length + 1).fill(false);
  table[table.length - 1] = true;
  for (let i = s.length - 1; i >= 0; i--) {
    const length = s.length - i;
    for (const word of wordDict) {
      if (length < word.length) continue;
      const compare = s.slice(i, i + word.length);
      if (compare === word) {
        table[i] = table[i + word.length];
        if (table[i]) break;
      }
    }
  }
  return table[0];
};

s = 'leetcode', wordDict = ['leet','code'] // true
console.log(wordBreak(s, wordDict));