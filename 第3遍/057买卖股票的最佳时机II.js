/* 
  https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/description/
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let ret = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i+1] > prices[i]) {
      ret += prices[i+1] - prices[i]
    }
  }
  return ret
}

console.log(maxProfit([1,2,3,4,5])) // 4