/* 
  https://leetcode-cn.com/problems/coin-change-2/
  参考： https://leetcode-cn.com/problems/coin-change-2/solution/ling-qian-dui-huan-iihe-pa-lou-ti-wen-ti-dao-di-yo/
*/
/**
 * 参考题解中，提到了爬楼梯的问题，并延伸出排列和组合的问题，
 * 对 [1,2] 来说，如果不限制使用次数，排列可以是 [1,1,2] 和 [1,2,1]，而对组合来说，其实是一种。
 * 在本题中，用到的就是组合。需要注意的也是，避免成为排列。
 * 如果抽象为是否使用某个面值的金额，就可以避免排列。
 * 对二维dp（dp是二维数组），2个循环交换，不影响，因为子问题不变。
 * 对一维dp，交换结果不同，如果外层循环是 coins，那说明在使用 coin 时，按顺序使用。那就是组合问题（组合coins）。交换后，就是排列问题了。
 * 
 * 所以，对爬楼梯问题来说，steps 应该放内层，因为爬楼梯是全排列问题（排列 steps），step 的组成顺序不同，是2种结果,
 * 比如：dp 数组默认都是0，计算dp[3]时，dp[3]= dp[3] + dp[i-step] = 3 组成为(12,21,111)
 * 再次进入外层循环，计算dp[4] = dp[4] + dp[i-step] (i-step 包含 dp[3])，所以会在 dp[3] 的基础上再次遍历 steps，就会形成(112,121,1111,22)
 * 也就是说，是在排列 steps。
 * 
 * 爬楼梯和零钱兑换，都属于 完全背包问题。
 * 如果将可选的方式（steps,coins）放在内层循环，就是排列问题。反之，就是组合问题。
 * 
 * 前 k 个硬币凑成金额 i 的组合数，要分两种情况计算：(也就是，用不用第 k 个硬币)
 * dp[k][i] = dp[k-1][i] + dp[k][i-coins[k]]
 * dp[k-1][i] 表示，没有用到第 k 个硬币，就凑够 i 的组合数。
 * dp[k][i-coins[k]] 表示，用上第 k 个硬币后，前 k 个硬币凑成 i-coins[k] 的组合数。
 * 
 * 以上，是对参考链接的补充。
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let dp = []
  for (let i = 0; i <= coins.length; i++) {
    dp[i] = new Array(amount + 1).fill(0)
    dp[i][0] = 1
  }

  for (let k = 1; k <= coins.length; k++) {
    for (let i = 1; i <= amount; i++) {
      if (i >= coins[k-1]) { // dp.length 是 coins.length + 1，所以这里用 coins[k-1] 表示第 k 个 coin
        dp[k][i] = dp[k-1][i] + dp[k][i-coins[k-1]]
      } else {
        dp[k][i] = dp[k-1][i]
      }
    }
  }
  return dp[coins.length][amount]
};



// O(n)
var change = function(amount, coins) {
  let dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (const coin of coins) {
    for (let i = 1; i <= amount; i++) {
      if(i >= coin) {
        dp[i] = dp[i] + dp[i-coin]
      }
    }
  }
  return dp[amount]
}
console.log(change(5, [1,2,5]))


/* 
  n 层楼梯，每次可爬 1 或 2
*/
function climbStairs(n, steps) {
  if (n <= 3) return n;
  let dp = new Array(n+1).fill(0)
  dp[0] = 1

  for (let i = 1; i <= n; i++) {
    for (const step of steps) {
      if (step > i) continue // 能跨越的步数 > 台阶数
      dp[i] = dp[i] + dp[i-step]
    }
  }
  return dp[n]
}

console.log(climbStairs(5, [6]))