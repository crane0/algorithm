/* 
  https://leetcode-cn.com/problems/unique-paths/

  主要问题是，状态方程的推导：
  如果从右下 --> 左上，那 pre[0][0] = pre[1][0] + pre[0][1]
  所以，也可以反过来推：左上 --> 右下，那 pre[n-1][m-1] = pre[n-2][m-1] + pre[n-1][m-2]
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m === 1) return 1
  let pre = []
  
  // 2种填充方式都可以，只要保证初始化后，第一行和第一列都是 1 即可。
  // for (let i = 0; i < n; i++) {
  //   pre[i] = new Array(m).fill(1)
  // }
  for (let i = 0; i < n; i++) {
    pre[i] = []
    pre[i][0] = 1;
  }
  for (let i = 0; i < m; i++) {
    pre[0][i] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      pre[i][j] = pre[i-1][j] + pre[i][j-1]
    }
  }

  return pre[n-1][m-1]

  // for (let i = n - 2; i >= 0; i--) {
  //   for (let j = m - 2; j >= 0; j--) {
  //     pre[i][j] = pre[i+1][j] + pre[i][j+1]
  //   }
  // }
  // return pre[0][0]
};

console.log(uniquePaths(7, 3))
