const coinChange = (coins, amount) => {
  const table = new Array(amount + 1).fill(Infinity);
  table[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      table[i] = Math.min(table[i], table[i - coin] + 1);
    }
  }

  return table[amount] !== Infinity ? table[amount] : -1;
};

coins = [1,2,5], amount = 11
console.log(coinChange(coins, amount));