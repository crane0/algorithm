/* 
  https://leetcode-cn.com/problems/reverse-bits/
*/
/**
 * 颠倒：将整个二进制翻转， 110 --> 011,  100 --> 001
 * 在 js 中，注意最后的结果要 >>> 0，可能 LeetCode 中对 n 做了处理，导致出现了负数，所以需要 >>> 0 处理。
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let num = 32, ret = 0
  while (num-- > 0) {
    ret = (ret << 1) + (n & 1)
    n >>= 1
  }
  return ret
}

/**
 * n.toString(2) 转为二进制，类型是字符串。
 * padEnd(32, 0) 在目标字符串的尾巴上进行重复填充第二个参数，最终新串的长度为第一个参数。
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  return parseInt(n.toString(2).split('').reverse().join('').padEnd(32, 0), 2)
}


/**
 * 超时
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
  let power = 31, ret = 0
  while (n !== 0) {
    ret += (n & 1) << power
    n >>= 1
    power--
  }
  return ret >>> 0
}
