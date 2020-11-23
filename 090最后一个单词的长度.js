/* 
  https://leetcode-cn.com/problems/length-of-last-word/
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let start = s.length - 1, end = 0
  while (s[start] === ' ') {
    start--
    if (start < 0) return 0;
  }
  end = start
  while (s[end] !== ' ' && end >= 0) {
    end--
  }
  return start - end
};

console.log(lengthOfLastWord("Hello"))

var str = 'heelo world  '
console.log(str.split(' '))
