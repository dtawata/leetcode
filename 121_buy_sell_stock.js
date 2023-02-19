const maxProfit = (prices) => {
  let max = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    const profit = price - min;
    max = Math.max(max, profit);
    min = Math.min(min, price);
  }
  return max;
};

prices = [7,1,5,3,6,4] // 5
console.log(maxProfit(prices));