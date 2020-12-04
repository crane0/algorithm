/* 
  https://leetcode-cn.com/problems/climbing-stairs/
*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 3) return n;
  let a = 2, b = 3, c = 0
  for (let i = 3; i < n; i++) {
    c = a + b
    a = b
    b = c
  }
  return c
};

console.log(climbStairs(5))
