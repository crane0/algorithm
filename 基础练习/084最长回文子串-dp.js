/* 
  https://leetcode-cn.com/problems/longest-palindromic-substring/

  思路，动态规划的思想
*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s;
 
  // dp[j][i] 表示 s[j]...s[i] 是回文串
  let dp = []
  for (let i = 0; i < s.length; i++) {
    dp[i] = Array(s.length).fill(false)
    dp[i][i] = true
  }

  let maxLen = 1
  let begin = 0

  // i 对应 col , j 对应 row
  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (s[i] === s[j]) {
        // (i - 1) - ( j + 1) + 1 < 2 ，就可以保证 dp[j][i] 是回文串
        if (i - j < 3) {
          dp[j][i] = true
        } else {
          // 看图示，遍历是一列一列遍历，dp[1][3] 的计算是在 dp[0][4] 之前的，所以可以保证下面的赋值。 
          dp[j][i] = dp[j+1][i-1]
        }
      }
      if (dp[j][i] && i - j + 1 > maxLen) {
        begin = j
        maxLen = i - j + 1
      }
    }
  }

  return s.slice(begin, begin + maxLen)
};

// console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("cbbd"))
// console.log(longestPalindrome("ac"))
console.log(longestPalindrome("babaddtattarrattatddetartrateedredividerb"))
