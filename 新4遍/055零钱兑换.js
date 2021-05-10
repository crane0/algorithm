/* 
  https://leetcode-cn.com/problems/coin-change/
  参考：https://leetcode-cn.com/problems/coin-change/solution/322-by-ikaruga/
*/

/**
 * 整体思路，
 * 从最大面值的硬币开始取，第一次直接取到头 parseInt(amount / coins[index])，在用剩下的总金额 amount - i * coins[index] 再次计算。
 * 如果发现最后没有找到，回溯，就是将上一个大面值的硬币数量 - 1，重复计算。
 * 因为会有奇葩的情况 [1, 7, 10] 14 ，如果按最大面值算，10+1+1+1+1，而最少次数是 7+7，所以要全部遍历所有结果。
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  
}

// console.log(coinChange([1,2,5], 11))
console.log(coinChange([3,7,405,436], 8839))