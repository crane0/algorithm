/* 
  https://leetcode-cn.com/problems/power-of-two/
*/
/**
 * 1，x & (x-1) 清零最低位的 1，
 * 2，如果是 2 的幂，则最高位是1，其他都是0
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n > 0 && (n & (n-1)) === 0
}