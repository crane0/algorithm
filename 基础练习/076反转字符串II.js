/* 
  https://leetcode-cn.com/problems/reverse-string-ii/

  题目意思，每隔 2k 个 反转前 k 个
  abcdefghijklmn -->
  bacdfeghjiklnm

*/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let str = ''
  for (let i = 0; i < s.length; i += 2 * k) {
    str += s.slice(i, i + k).split('').reverse().join('') + s.slice(i + k, i + 2 * k)
  }
  return str
};

console.log(reverseStr('abcdefghijklmn', 2))