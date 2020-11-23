/* 
  https://leetcode-cn.com/problems/reverse-only-letters/
*/
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  const strDict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let str = ''
  let sign = []
  for (let i = 0; i < S.length; i++) {
    if (strDict.indexOf(S[i]) !== -1) {
      str +=S[i]
    } else {
      sign.push([i, S[i]])
    }
  }

  str = str.split('').reverse()

  for (let i = 0; i < sign.length; i++) {
    str.splice(sign[i][0], 0, sign[i][1])
  }

  return str.join('')
};

console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"))
