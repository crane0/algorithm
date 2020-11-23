/* 
  https://leetcode-cn.com/problems/triangle/description/

  下面的解法是错误的，只是简单的贪心。
*/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let count = triangle[0][0]
  let index = 0
  for (let i = 0; i < triangle.length - 1; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      let a = triangle[i+1][index]
      let b = triangle[i+1][index+1]
      if (a >= b) {
        index = index+1
      }
      let min = Math.min(a, b)
      count += min
      break
    }
  }
  return count
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