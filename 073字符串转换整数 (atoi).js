/* 
  https://leetcode-cn.com/problems/string-to-integer-atoi/

  参考 https://leetcode-cn.com/problems/string-to-integer-atoi/solution/jin-liang-bu-shi-yong-ku-han-shu-nai-xin-diao-shi-/
  思路很清晰。

  为了节省空间，所以不用 trim 去空格。因为 JavaScript 的 string 在定义之后，是不可变的。如果增删了字符，会新生成一个字符串。
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
  const max = Math.pow(2, 31) - 1, min = -Math.pow(2, 31)

  while (index < s.length) {
    let char = s[index]
    if (isNaN(char) || char === ' ') {
      break
    }

    if (result > Math.floor(max / 10) || (result === Math.floor(max / 10) && char > 7)) { // max % 10
      return max
    }
    if (result < Math.ceil(min / 10) || (result === Math.ceil(min / 10) && char > 8)) { // min % 10
      return min
    }
    result = result * 10 + sign * char
    index++
  }
  return result
};

// console.log(myAtoi("-91283472332"))
console.log(myAtoi("2147483648"))
// console.log(myAtoi("-2147483649"))

