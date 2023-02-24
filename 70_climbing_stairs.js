const climbStairs = (n) => {
  const table = [1, 1];
  for (let i = 2; i <= n; i++) {
    const sum = table[i - 1] + table[i - 2];
    table.push(sum);
  }
  return table[n];
};

n = 2;
console.log(climbStairs(n));