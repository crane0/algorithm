/* 
  https://leetcode-cn.com/problems/valid-palindrome-ii/

  用一个方法，分别调用，看起来清晰多了，但是次数如果改变，这种方式就不好改了。
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let i = 0, j = s.length - 1;

  while(i < j && s[i] === s[j]) {
    i++;
    j--;
  }

  if(isPalindrome(i+1, j)){
    return true;
  }

  if(isPalindrome(i, j-1)) {
    return true;
  }

  function isPalindrome(start, end) {
    while(start++ < end--) {
      if(s[start] !== s[end]) {
          return false
      }
      start++;
      end--
    }
    return true;
  }

  return false;
};

console.log(validPalindrome("abc"))
// console.log(validPalindrome("abqcefeca"))
// console.log(validPalindrome("lcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucul"))
