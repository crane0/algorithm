/* 
  https://leetcode-cn.com/problems/valid-anagram/
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false

  let dict = new Array(26).fill(0)
  const aPoint = 'a'.codePointAt()

  for (const str of s) {
    dict[str.codePointAt() - aPoint]++
  }
  for (const str of t) {
    dict[str.codePointAt() - aPoint]--
    if (dict[str.codePointAt() - aPoint] < 0) {
      return false
    }
  }
  return true
  
};
console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('a', 'b'))
console.log(isAnagram('aacc', 'ccac'))
