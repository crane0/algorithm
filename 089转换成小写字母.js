/* 
  https://leetcode-cn.com/problems/to-lower-case/
*/
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let ret = ''
  for(let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char.codePointAt() <= 90 && char.codePointAt() >= 65) {
      char = String.fromCodePoint(char.codePointAt() + 32)
    }
    ret += char
  }
  return ret
};
console.log(toLowerCase('Hello'))