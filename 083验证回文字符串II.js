/* 
  https://leetcode-cn.com/problems/valid-palindrome-ii/
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let left = 0, right = s.length - 1, count = 1
  while (left < right) {
    if (left > right) return true;

    if (s[left] !== s[right]) {
      if (count === 0) return false;
      count--

      // 2中情况分别再次计算，而不是直接 left++ 或 right-- 后 continue，是因为可能2种情况同时会满足，看下面的例子。
      let _left = left, _right = right, boo = true
      if (s[left+1] === s[right]) {
        _left++
        while (_left++ < _right--) {
          if (s[_left] !== s[_right]) {
            boo = false
            break
          }
        }
        if (boo) {
          return true
        } else {
          _left = left, _right = right
        }
      } 
      
      if (s[left] === s[right-1]) {
        _right--
        while (_left++ < _right--) {
          if (s[_left] !== s[_right]) {
            return false
          }
        }
        return true;
      } else {
        return false
      }
    }
    left++
    right--
  }
  return true
};

// console.log(validPalindrome("lcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucul"))
