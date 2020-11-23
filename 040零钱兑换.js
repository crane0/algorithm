/* 
  https://leetcode-cn.com/problems/coin-change/
  参考：https://leetcode-cn.com/problems/coin-change/solution/322-by-ikaruga/  贪心 + dfs

  也可以用 BFS 求解，大致流程看图示。
  也可以用 DP 求解
    f(n) = Math.min(f(n-k), k in [1,2,5]) + 1  
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) return 0
  let ans = Infinity
  coins = coins.sort((a, b) => b - a)

  change(coins, amount, 0, 0, ans);
  return ans === Infinity ? -1 : ans

  // count 为使用硬币的次数。
  function change(coins, amount, index, count) {
    if (amount === 0) {
      ans = Math.min(ans, count)
      return
    }

    if (coins.length === index) return;
    
    /* 
      Math.floor(amount / coins[index]), 当前 coins[index] 大小的硬币最多能用几个。
      amount - k * coins[index], dfs 时，amount 应减去用过的 k 个硬币。
      k + count < ans，为了减少循环次数，因为 k + 当前 count 如果比已经计算出的 ans 大的话，就不用循环了。
    */
    for (let k = Math.floor(amount / coins[index]); k >= 0 && k + count < ans; k--) {
      change(coins, amount - k * coins[index], index + 1, count + k);
    }
  }
};

// console.log(coinChange([1, 2, 5], 11))
// console.log(coinChange([2], 3))
// console.log(coinChange([1], 1))
console.log(coinChange([186,419,83,408], 6249))