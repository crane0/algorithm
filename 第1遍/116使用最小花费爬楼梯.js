/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  cost.push(1)
  const len = cost.length
  let dp = new Array(len).fill(0)
  for (let i = 2; i < len; i++) {
    dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
  }
  return dp[len - 1]
};
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
console.log(minCostClimbingStairs([10, 15, 20]))