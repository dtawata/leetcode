const combinationSum = (candidates, target) => {
  const table = Array.from({ length: target + 1}, () => {
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

candidates = [2,3,6,7], target = 7 // [[2,2,3],[7]]
console.log(combinationSum(candidates, target));