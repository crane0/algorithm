/* 
  https://leetcode-cn.com/problems/triangle/description/

  递归 + 记忆化搜索版本，自顶向下。
*/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let cache = []
  for (let i = 0; i < triangle.length; i++) {
    cache[i] = []
  }
  return dfs(triangle, 0, 0);

  function dfs(triangle, i, j) {
    if (i === triangle.length) {
      return 0;
    }
    if (cache[i][j] !== undefined) { // 数组一开始不能填充为 0，因为有 Math.min 的判断，所以用 undefined 判断即可。
      return cache[i][j];
    }
    return cache[i][j] = Math.min(dfs(triangle, i + 1, j), dfs(triangle, i + 1, j + 1)) + triangle[i][j]
  }
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