/* 
  https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
*/
/**
 * dp[i][0] = Math.max(dp[i][0], dp[i][1] + prices[i] - fee)
 * dp[i][1] = Math.max(dp[i][1], dp[i][0] - prices[i] - fee)
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  const len = prices.length
  if (len < 2) return 0

  let dp = []
  for (let i = 0; i < len; i++) {
    dp[i] = [0, 0]
  }
  dp[0][1] = -prices[0]
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] - fee)
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
  }
  return dp[len-1][0]
};
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))
