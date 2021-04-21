/* 
  https://leetcode-cn.com/problems/palindromic-substrings/
*/
/**
 * 找出所有可能的回文中心，向两边扩展的找出可能的回文串。
 * 回文中心，可能是1个或2个字符。（如果是3个，可以简化为1个的情况。）
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const len = s.length
  if (len < 2) return len

  let left = 0, right = 0, count = 0
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < 2; j++) {
      left = i
      right = j + i // 0 和 1 表示回文中心是1个字符还是2个
      while (left >=0 && right < len && s[left--] === s[right++]) {
        count++
      }
    }
  }
  return count
}

/** 
 * dp[i][j] 表示 i--j 是否是回文串
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const len = s.length
  if (len < 2) return len

  let dp = [], count = 0
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false);
  }

  for (let i = 0; i < len; i++) {
    for (let left = 0; left + i < len; left++) {
      let right = left + i
      /* 
        在 s[left] === s[right] 的前提下，
        left+1 >= right-1 表示 3 种情况，(0,0) (0,1) (0,2)
        (0,0) 只有一个字符，是回文串
        (0,1) s[0] === s[1] 2个字符，也是回文串
        (0,2) s[0] === s[2] 3个字符，也是回文串

        left+1 >= right-1 就很好理解了。
        基于以上，所以2个for遍历时，应该是这样逐渐往外扩散
        (0,0) (1,1) (2,2) (3,3) (4,4)
        (0,1) (1,2) (2,3) (3,4)
        (0,2) (1,3) (2,4)
        (0,3) (1,4)
        (0,4)
      */
      if (s[left] === s[right]) {
        dp[left][right] = left+1 >= right-1 ? true : dp[left+1][right-1]
      }
      if (dp[left][right]) count++;
    }
  }
  return count
};

console.log(countSubstrings('aaa'))
