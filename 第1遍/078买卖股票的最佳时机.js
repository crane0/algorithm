/* 
  https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
*/
/**
 * 因为只能买一次，卖一次
 * 假设第 i 天卖出，那买入点就是 [0, i-1]
 * 所以，遍历数组，依次求出每个卖出时机点的最大值，再求总的最大值。
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = Infinity
  let maxProfit = 0

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice
    }
  }
  return maxProfit
}


/* 
  利用最大子序和的思路
*/
var maxProfit = function(prices) {
  let pre = 0
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    const diff = prices[i] - prices[i-1] // 第 i 天卖出的利润差
    // 第 i 天卖出的最大利润 = 第 i-1 天卖出的最大利润 + 第 i 天卖出的利润差
    // 0 来保证，如果股票持续下跌到利润为负了，就不会再买入，直到出现上涨的点。对应股票曲线，就是保证买入点肯定比卖出点低。
    pre = Math.max(pre + diff, 0)
    maxProfit = Math.max(maxProfit, pre)
  }
  return maxProfit
}


console.log(maxProfit([7,1,5,3,6,4]))