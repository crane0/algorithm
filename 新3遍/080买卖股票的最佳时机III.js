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
  
};


/**
 * 因为只用到了昨天的状态，所以可以去掉
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
 
};


/* 
  比较简单的理解
*/
var maxProfit = function(prices) {
  
};

console.log(maxProfit([3,3,5,0,0,3,1,4]))