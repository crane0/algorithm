/* 
  https://leetcode-cn.com/problems/unique-paths-ii/
*/
/**
 * 因为有障碍，所以不能再初始化都为1了。
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0;

  const m = obstacleGrid.length, n = obstacleGrid[0].length
  let arr = new Array(n).fill(0)
  arr[0] = 1

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        arr[j] = 0
        continue
      }
      if (j > 0) {
        arr[j] += arr[j-1]
      }
    }
  }
  return arr[n-1]
  
}
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))
console.log(uniquePathsWithObstacles([[0]]))