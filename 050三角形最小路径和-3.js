/* 
  https://leetcode-cn.com/problems/triangle/description/

  相比于 v2，优化空间复杂度为 O(n)
*/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let dp = Array(triangle.length+1).fill(0)

  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) { // 层数，和该层对应的元素个数相同
      dp[j] = Math.min(dp[j+1], dp[j]) + triangle[i][j]
    }
  }
  return dp[0]
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