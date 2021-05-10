/* 
  https://leetcode-cn.com/problems/number-of-1-bits/
*/
/**
 * 循环32次，n & 1 每次可以得到最右边的 1，每次 n 右移一位
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
   let num = 32, count = 0
   while (num-- > 0) {
     count += n & 1
     n = n >> 1
   }
   return count
 }