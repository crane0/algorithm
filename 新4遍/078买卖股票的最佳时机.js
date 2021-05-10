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
 
}


/* 
  利用最大子序和的思路
*/
var maxProfit = function(prices) {
  
}


console.log(maxProfit([7,1,5,3,6,4]))