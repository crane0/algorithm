/* 
  https://leetcode-cn.com/problems/triangle/description/

  自底向上 DP，见图示。
  状态转移方式, dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j]

  参考 https://leetcode-cn.com/problems/triangle/solution/di-gui-ji-yi-hua-dp-bi-xu-miao-dong-by-sweetiee/
*/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  // 也可以不用 dp，直接操作 triangle
  let dp = []
  let n = triangle.length
  for (let i = 0; i <= n; i++) {
    dp[i] = Array(n + 1).fill(0)
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) { // 层数，和该层对应的元素个数相同
      dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j]
    }
  }
  return dp[0][0]
};

// console.log(minimumTotal([
//   [2],
//  [3,4],
// [6,5,7],
// [4,1,8,3]
// ]))

console.log(minimumTotal([
  [-1],
  [2,3],
  [1,-1,-3]
]))