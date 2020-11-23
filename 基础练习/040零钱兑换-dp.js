/* 
  https://leetcode-cn.com/problems/coin-change/

  DP 求解
    f(n) = Math.min(f(n-k), k in [1,2,5]) + 1  
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 解法参考了官方题解，未做测试！
var coinChange = function(coins, amount) {
  if (amount === 0) return 0
  let max = amount + 1

  let dp = Array(max).fill(max)
  dp[0] = 0
  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount]> amount ? -1: dp[amount]
};

// console.log(coinChange([1, 2, 5], 11))
// console.log(coinChange([2], 3))
// console.log(coinChange([1], 1))
console.log(coinChange([186,419,83,408], 6249))