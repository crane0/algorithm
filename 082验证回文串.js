/* 
  https://leetcode-cn.com/problems/valid-palindrome/
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let left = 0, right = s.length - 1
  while (left < right) {
    while (!test(s[left])) left++;
    while (!test(s[right])) right--;

    if (left > right) return true;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false
    }
    left++;
    right--;
  }
  return true

  function test(s) {
    const reg = /[A-Za-z0-9]/
    return reg.test(s)
  }
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
// console.log(isPalindrome(".,"))s

