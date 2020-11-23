/* 
  https://leetcode-cn.com/problems/reverse-bits/
*/
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let power = 31, ret = 0
  while (n !== 0) {
    ret += (n & 1) << power
    n = n >> 1
    power--
  }
  return ret >>> 0 // 这个操作，在 Python 中不需要了，可能 LeetCode 中对 n 做了处理，导致出现了负数，所以需要 >>> 0 处理。
};

var reverseBits2 = function(n) {
  let ret = 0
  for (let i = 0; i < 32; i++) {
    ret = (ret << 1) + (n & 1)
    n >>= 1
  }
  return ret >>> 0 // 这个操作，在 Python 中不需要了，可能 LeetCode 中对 n 做了处理，导致出现了负数，所以需要 >>> 0 处理。
};