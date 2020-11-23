/* 
  https://leetcode-cn.com/problems/longest-palindromic-substring/

  思路，一次遍历字符串，从每个索引处，向两边扩散，寻找最长。
  遍历O(N)，扩散O(N)，所以是O(N^2)
*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s;
 
  let ret = s[0]
  let maxLen = 1

  for (let i = 0; i < s.length; i++) {
    // 中心点可能是在某个字符处，也可能在2个字符中间
    let oddSpread = centerSpread(s, i, i)
    let evenSpread = centerSpread(s, i, i+1)
    let resStr = oddSpread.length > evenSpread.length ? oddSpread : evenSpread
    if (resStr.length > maxLen) {
      ret = resStr
      maxLen = resStr.length
    }
  }

  function centerSpread(s, left, right) {
    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        left--
        right++
      } else {
        break
      }
    }
    return s.substring(left + 1, right)
  }

  return ret
};

// console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("bb"))
// console.log(longestPalindrome("babaddtattarrattatddetartrateedredividerb"))
