/* 
  https://leetcode-cn.com/problems/power-of-two/

  思路：n 的二进制中，有且仅有一个 1
  注意运算符优先级。
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n > 0 && (n & (n-1)) === 0
 };