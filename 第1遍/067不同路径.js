/* 
  https://leetcode-cn.com/problems/unique-paths/
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m === 1) return 1
  let arr = []
  for (let i = 0; i < m; i++) {
    arr[i] = []
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        arr[i][j] = 1
      } else {
        arr[i][j] = 0
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i-1][j] + arr[i][j-1]
    }
  }
  return arr[m-1][n-1]
}


/*  
  空间复杂度从 O(m*n) 优化到 O(n)
*/
var uniquePaths = function(m, n) {
  if (m === 1) return 1
  let arr = new Array(n).fill(1)

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      /* 
        i = 1 时，arr[j] 初始值都是 1
        i = 2 时，arr[j] 初始值在上一轮循环得到了。
      */
      arr[j] += arr[j-1]
    }
  }
  return arr[n-1]
}
console.log(uniquePaths(3, 7))