/* 
  https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
*/
/**
 * dp[i][0或1]，表示第 i 天持有的 cash，
 * 0表示：不持股，卖出状态
 * 1表示，持股，买入状态
 * 2表示，不持股，冷冻期
 * 
 * 今天卖出状态：昨天可能也是卖出，昨天是买入+今天卖出，昨天是冷冻期（那就是冷冻期的持有）
 * dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i], dp[i-1][2])
 * dp[i][1] = Math.max(dp[i-1][1], dp[i-1][1] - prices[i], dp[i-1][2] - prices[i])
 * dp[i][2] = dp[i-1][0]
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  
};

var maxProfit = function(prices) {
  
  
};

// console.log(maxProfit([1,2,3,0,2]))
// console.log(maxProfit([1,2,4]))
// console.log(maxProfit([1,2]))
console.log(maxProfit([6,1,6,4,3,0,2]))