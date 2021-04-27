/* 
  https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
*/
/**
 * 贪心，只要比之前的大，就卖出，卖出的同时可买入。
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  
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
  
};

// 2个一维数组
var maxProfit = function(prices) {
  
}


// O(1) 空间复杂度
var maxProfit = function(prices) {
 
}

// 2个变量
var maxProfit = function(prices) {
 
}
// console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([1,2,3,4]))

/*  */