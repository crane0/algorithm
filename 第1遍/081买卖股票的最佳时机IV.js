/* 
  https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
*/
/**
 * 参考080
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k, prices) {
   if (k === 0) return 0
  const len = prices.length
  if (len < 2) return 0

  let dp = []
  for (let j = 0; j < k + 1; j++) {
    dp[j] = [0, -Infinity]
  }
  dp[1][1] = -prices[0] // 第1次买入并持股

  let ret = 0
  for (let i = 1; i < len; i++) {
    // 先买入，才能卖出
    for (let j = 1; j < dp.length; j++) {
      dp[j][0] = Math.max(dp[j][0], dp[j][1] + prices[i])
      dp[j][1] = Math.max(dp[j][1], dp[j-1][0] - prices[i])
      ret = Math.max(ret, dp[j][0])
    }
  }
  return ret
};



// 参考080 的简单题解思路
var maxProfit = function(k, prices) {
  if (k === 0) return 0
  if (prices.length < 2) return 0

  let dp = new Array(k*2+1).fill(-Infinity)
  dp[0] = 0
  dp[1] = -prices[0]
  let max = 0

  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j < dp.length; j++) {
      if (j % 2 === 0) {
        dp[j] = Math.max(dp[j], dp[j-1] + prices[i])
      } else {
        dp[j] = Math.max(dp[j], dp[j-1] - prices[i])
      }
      max = Math.max(max, dp[j])
    }
  }
  return max
};

// console.log(maxProfit(2, [3,2,6,5,0,3]))
console.log(maxProfit(1, [1,2]))