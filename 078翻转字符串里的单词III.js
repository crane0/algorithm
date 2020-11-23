/* 
  https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let str = ''
  for(const char of s.split(' ')) {
    str += char.split('').reverse().join('') + ' '
  }
  return str.trim() // 去掉最后面的空格
};