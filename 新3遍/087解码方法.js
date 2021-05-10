/* 
  https://leetcode-cn.com/problems/decode-ways/
*/
/**
 * dp[i] 表示前 i 个数字的解码方法个数。(注意s[index] 表示前 index + 1 个数字)
 * s[i] === 0,
 *    if s[i-1] === 1 || 2，那只有一种解法，就是 10 || 20，所以并没有新增解码方法 dp[i+1] = dp[i-1]
 *    else return 0
 * s[i] !== 0,
 *  s[i-1] === 1,
 *    i-1 和 i 分开译，那就是前 i 个数字的解法（不使用s[i]，因为它单独译，不增加解法），所以是 dp[i]，
 *    i-1 和 i 合并译，只有一种解法，并没有新增解法，所以是 dp[i-1]
 *  s[i-1] === 2 && s[i] in 1-6,
 *    同上。
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  
};

console.log(numDecodings('226'))