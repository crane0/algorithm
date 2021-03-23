/* 
  https://leetcode-cn.com/problems/coin-change/
*/
/**
 * 自上而下，
 * 思路： F(S)表示组成金额 S 所需的最少硬币数量，C 表示最后一枚硬币的面值
 * 则最小子问题: F(S) = F(S-C) + 1
 * 而因为 C 不知道，所以需要枚举 coins，选取最小值。
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  
}

/* 
  动态规划：自底向上
  F(S)表示组成金额 S 所需的最少硬币数量
  dp 方程：F(S) = min(F(S), F(S-iterator(coins)) + 1)
*/
var coinChange = function(coins, amount) {
  
}

console.log(coinChange([1,2,5], 2))
// console.log(coinChange([3,7,405,436], 8839)) // 25