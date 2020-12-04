/* 
  https://leetcode-cn.com/problems/climbing-stairs/

  爬楼地能转换成 菲波那切数列 是因为：
  爬到第 n 层台阶的方法 = 能爬到第 n - 1 层的方法 + 能爬到第 n - 2 层的方法
*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 3) return n;
  let a = 2, b = 3, c = 0
  for (let i = 4; i <= n; i++) {
    c = a + b
    a = b
    b = c
  }
  return c
};

console.log(climbStairs(5))
