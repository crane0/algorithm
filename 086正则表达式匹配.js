/* 
  https://leetcode-cn.com/problems/regular-expression-matching/
*/
/**
 * @param {string} s a-z
 * @param {string} p a-z . *
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // s = ' ' + s 为了保证 p[1] = * 的情况，因为 x* 可以匹配到 ' '
  // p = ' ' + p 是因为保证顺序和 s 对应上
  s = ' ' + s, p = ' ' + p
  let m = s.length, n = p.length

  let dp = Array(m+1).fill([])
  for (let i = 0; i < m+1; i++) {
    dp[i] = Array(n+1).fill(false)
  }
  dp[0][0] = true // 2个空串
 
  // i,j表示的是第几个字符，不是字符索引
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (p[j-1] === s[i-1] || p[j-1] === '.') {
        dp[i][j] = dp[i-1][j-1]
      } else if (p[j-1] === '*') { // * 前必有字母
        if (p[j-2] !== s[i-1] && p[j-2] !== '.') {
          dp[i][j] = dp[i][j-2]
        } else {
          dp[i][j] = dp[i-1][j] || dp[i][j-1] || dp[i][j-2]
        }
      }
    }
  }

  return dp[m][n]
};

// console.log(isMatch("aab", "c*a*b"))
// console.log(isMatch(" mississippi", " mis*is*p*."))
console.log(isMatch("a", "c*a"))
