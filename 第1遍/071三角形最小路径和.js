/* 
  https://leetcode-cn.com/problems/triangle/
*/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const len = triangle.length
  let dp = []
  for (let i = 0; i < len + 1; i++) {
    dp[i] = new Array(len + 1).fill(0) // 因为是自底向上推，先在最底层铺满 0
  }

  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) { // 元素个数 = 层数（从0计数）+ 1
      dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j]
    }
  }
  return dp[0][0]
}


// O(n)
var minimumTotal = function(triangle) {
  const len = triangle.length
  let dp = new Array(len + 1).fill(0)

  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = Math.min(dp[j], dp[j+1]) + triangle[i][j]
    }
  }
  return dp[0]
}

// console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]))
