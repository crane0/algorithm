/* 
  https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
*/
/**
 * 参考 079 的思路，多了交易次数的限定，那就再升维
 * dp[i][j][k]
 * i 表示 0--i 天内持有的 cash
 * j 表示 买入股票的次数，0，1，2
 * k 表示 是否持股状态，0 不持有。
 * dp[0][0][0] = 0
 * dp[0][0][1] = 0 // 不可能发生（不买入但持股）
 * dp[0][1][0] = 0 // 不可能发生（买入1次但不持股）
 * dp[0][1][1] = -prices[0] // 买入1次并持股
 * dp[0][2][0] = 0 // 不可能发生（买入2次不持股）
 * dp[0][2][1] = -Infinity // 买入2次但持股，虽然正常，但第0天不可能发生
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length
  if (len < 2) return 0

  let dp = []
  for (let i = 0; i < len; i++) {
    dp[i] = []
    for (let j = 0; j < 3; j++) {
      dp[i][j] = [0, 0]
    }
  }
  dp[0][1][1] = -prices[0]
  dp[0][2][1] = -Infinity

  for (let i = 1; i < len; i++) {
    // 先买入，才能卖出
    dp[i][1][1] = Math.max(dp[i-1][1][1], - prices[i])
    dp[i][1][0] = Math.max(dp[i-1][1][0], dp[i-1][1][1] + prices[i])
    // 这里要保证第一次赋值为 dp[i-1][1][0] - prices[i] （只有在之前的状态有被赋值的时候，才可能有当前状态。），所以 dp[i][2][1] 要初始化为 -Infinity
    dp[i][2][1] = Math.max(dp[i-1][2][1], dp[i-1][1][0] - prices[i])
    dp[i][2][0] = Math.max(dp[i-1][2][0], dp[i-1][2][1] + prices[i])
  }
  return Math.max(dp[len-1][1][0], dp[len-1][2][0])
};


/**
 * 因为只用到了昨天的状态，所以可以去掉
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length
  if (len < 2) return 0

  let dp = []
  for (let j = 0; j < 3; j++) {
    dp[j] = [0, 0]
  }
  dp[1][1] = -prices[0]
  dp[2][1] = -Infinity

  for (let i = 1; i < len; i++) {
    // 先买入，才能卖出
    dp[1][1] = Math.max(dp[1][1], - prices[i])
    dp[1][0] = Math.max(dp[1][0], dp[1][1] + prices[i])
    dp[2][1] = Math.max(dp[2][1], dp[1][0] - prices[i])
    dp[2][0] = Math.max(dp[2][0], dp[2][1] + prices[i])
  }
  return Math.max(dp[1][0], dp[2][0])
};


/* 
  比较简单的理解
*/
var maxProfit = function(prices) {
  if (prices.length < 2) return 0

  let dp0 = 0 // 从始至终不持有股票
  let dp1 = -prices[0] // 买入一次，不卖出
  let dp2 = -Infinity // 买入一次，卖出
  let dp3 = -Infinity // 买入二次，卖出一次
  let dp4 = -Infinity // 买入二次，卖出二次

  for (let i = 1; i < prices.length; i++) {
    dp1 = Math.max(dp1, dp0 - prices[i])
    dp2 = Math.max(dp2, dp1 + prices[i]) // dp2 初始值负无穷大，是要保证第一次赋值时 dp2 = dp1 + prices[i]
    dp3 = Math.max(dp3, dp2 - prices[i])
    dp4 = Math.max(dp4, dp3 + prices[i])
  }
  return Math(dp2, dp4)
};

console.log(maxProfit([3,3,5,0,0,3,1,4]))