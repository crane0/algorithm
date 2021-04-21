/* 
  https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
*/
/**
 * 贪心，只要比之前的大，就卖出，卖出的同时可买入。
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let ret = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i-1]) {
      ret += prices[i] - prices[i-1]
    }
  }
  return ret
};

/**
 * 动态规划
 * dp[i][0或1] 表示在第 i 天的持有的 cash，0或1表示状态，0 持有 cash，1持有 stock
 * 则 dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]) //  + prices[i] 表示卖出prices[i]，变成持有的 cash
 * dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]) //  - prices[i] 表示买入prices[i]，持有 stock（cash 减少）
 * @param {number[]} prices 
 * @returns {number}
 */
var maxProfit = function(prices) {
  const len = prices.length
  let dp = []
  for (let i = 0; i < len; i++) {
    dp[i] = [0,0]
  }
  dp[0][1] = -prices[0] // 第 0 天持有股票，则 cash 为负
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
  }
  return dp[len-1][0]
};

// 2个一维数组
var maxProfit = function(prices) {
  const len = prices.length
  let cash = new Array(len).fill(0)
  let hold = new Array(len).fill(0)

  hold[0] = -prices[0]

  for (let i = 1; i < len; i++) {
    cash[i] = Math.max(cash[i-1], hold[i-1] + prices[i]) // 卖出股票
    hold[i] = Math.max(hold[i-1], cash[i-1] - prices[i]) // 买入股票
  }
  return cash[len-1]
}


// O(1) 空间复杂度
var maxProfit = function(prices) {
  const len = prices.length
  let cash = 0
  let hold = -prices[0]
  let preCash = cash
  let preHold = hold
  for (let i = 1; i < len; i++) {
    cash = Math.max(preCash, preHold + prices[i]) // 卖出股票
    hold = Math.max(preHold, preCash - prices[i]) // 买入股票

    preCash = cash
    preHold = hold
  }
  return cash
}

// 2个变量
var maxProfit = function(prices) {
  const len = prices.length
  let cash = 0
  let hold = -prices[0]
  for (let i = 1; i < len; i++) {
    cash = Math.max(cash, hold + prices[i]) // 卖出股票
    hold = Math.max(hold, cash - prices[i]) // 买入股票
  }
  return cash
}
// console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([1,2,3,4]))

/*  */