// let result = Math.max(...nums);
const combinationSum = (candidates, target) => {
  const table = Array.from({length: target + 1}, () => {
      return [];
  });
  table[0].push([]);
  for (const candidate of candidates) {
      for (let i = candidate; i <= target; i++) {
          const diff = i - candidate;
          for (const arr of table[diff]) {
              table[i].push(arr.concat(candidate));
          }
      }
  }
  return table[target];
};