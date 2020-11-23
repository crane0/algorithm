/* 
  https://leetcode-cn.com/problems/reverse-words-in-a-string/

  关键在删除字符串中间的空格
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').filter(i => i).reverse().join(' ')
};

console.log(reverseWords("a good   example"))