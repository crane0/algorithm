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
  const len = prices.length
  if (len < 2) return 0
  if (len === 2) return Math.max(prices[1] - prices[0], 0)

  let dp = [], ret = 0
  for (let i = 0; i < len; i++) {
    dp[i] = [0,0,0]
  }
  dp[0][1] = -prices[0]
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i], dp[i-1][2])
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][1] - prices[i], dp[i-1][2] - prices[i])
    dp[i][2] = dp[i-1][0]
    ret = Math.max(dp[i][0], dp[i][2])
  }
  console.log(dp)
  return ret
};

var maxProfit = function(prices) {
  if(prices.length<2) return 0;
  // 建立二维数组
  let dp=new Array(prices.length);
  for(let i=0;i<prices.length;i++){
      dp[i]=new Array(2);
  };
  // 初始状态
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1])
  dp[1][1] = Math.max(dp[0][1], -prices[1])
  // 计算dp[i][j]
  for(let i=2;i<prices.length;i++){
      dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i]);
      dp[i][1]=Math.max(dp[i-1][1],dp[i-2][0]-prices[i]);
      
  }
  return Math.max(dp[prices.length-1][0])
  
};

// console.log(maxProfit([1,2,3,0,2]))
// console.log(maxProfit([1,2,4]))
// console.log(maxProfit([1,2]))
console.log(maxProfit([6,1,6,4,3,0,2]))