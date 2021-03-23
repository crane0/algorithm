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
  if (amount < 1) return 0

  // 一开始申请了 amount 大小的数组，dp[index] 表示组成该金额（index 表示的就是金额）最小的面额数。下面的 dp[amount - 1] 就是这个意思。
  let dp = new Array(amount).fill(0)
  return dfs(amount)

  function dfs(amount) {
    if (amount < 0) return -1 // 没有满足面额的硬币
    if (amount === 0) return 0
    if (dp[amount - 1] !== 0) return dp[amount - 1] // 存储已经计算过的

    let min = Infinity
    for (const coin of coins) {
      const res = dfs(amount - coin)
      if (res >= 0 && res < min) {
        min = res + 1
      }
    }
    dp[amount - 1] = min === Infinity ? -1 : min
    return dp[amount - 1]
  }
}

/* 
  动态规划：自底向上
  F(S)表示组成金额 S 所需的最少硬币数量
  dp 方程：F(S) = min(F(S), F(S-iterator(coins)) + 1)
*/
var coinChange = function(coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i-coin] + 1)
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount]
}

console.log(coinChange([1,2,5], 2))
// console.log(coinChange([3,7,405,436], 8839)) // 25