/* 
  https://leetcode-cn.com/problems/reverse-bits/

  主要知道了，padEnd 的用法
*/
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  return parseInt(n.toString(2).split('').reverse().join('').padEnd(32, 0), 2)
};
