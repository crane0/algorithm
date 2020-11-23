/* 
  https://leetcode-cn.com/problems/string-to-integer-atoi/
*/
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let index = 0
  while (s[index] === ' ') { // 头部空格
    index++
  }

  let sign = 1 // 正负号，只有第一次出现才合法
  if (s[index] === '+') {
    index++
  } else if (s[index] === '-') {
    index++
    sign = -1
  }

  let result = 0
  const max = 2 ** 31 - 1, min = -(2 ** 31)

  while (index < s.length) {
    let digit = s[index].codePointAt() - "0".codePointAt();
    if (digit < 0 || digit > 9) break;
    result = result * 10 + sign * digit;
    index++;
  }

  if (result > max) return max
  if (result < min) return min
  return result
};

// console.log(myAtoi("-91283472332"))
console.log(myAtoi("2147483648"))
// console.log(myAtoi("-2147483649"))

