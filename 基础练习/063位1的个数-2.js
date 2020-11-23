/* 
  https://leetcode-cn.com/problems/number-of-1-bits/

  解法2，位运算
  注意，测试不能在 vscode 或 浏览器中测试，因为输入的 n 有时 0 开头，则默认转为 8 进制，否则 10进制。
  在 LeetCode 中执行时，都是作为 10进制的。
*/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0
  let num = 32
  /* 
    每次与1，如果最低位是 1，count++，再在进行右移，打掉最低位的 1
    num 取 32，是因为二进制最多32位。
    所以，也有可能剩下的全部是 0，还是会进行循环，不过 count 就比变为 + 0，也不影响。
  */
  while (num--) {
      count += (n & 1)
      n = n >> 1
  }
  return count
};

console.log(hammingWeight(11111111111111111111111111111101))