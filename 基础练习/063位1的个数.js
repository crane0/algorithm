/* 
  https://leetcode-cn.com/problems/number-of-1-bits/

  解法1，循环计数
*/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  n = n.toString(2) // 转为 2 进制的字符串
  let count = 0
  for (let i = 0; i < n.length; i++) {
    if (n[i] === '1') {
      count++
    }
  }
  return count
};

console.log(hammingWeight(11111111111111111111111111111101))