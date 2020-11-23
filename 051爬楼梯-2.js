/* 
  相比于 v1，空间复杂度降低
*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 3) return n;
  let a = 1, b = 2, c = 0;
  for (let i = 2; i < n; i++) { // 从 2 开始，因为 a 和 b 已经有值了。少2次循环
    c = a + b
    a = b
    b = c
  }
  return c
};

console.log(climbStairs(4))