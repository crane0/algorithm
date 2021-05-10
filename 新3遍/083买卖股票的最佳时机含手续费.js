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
 
};
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))
