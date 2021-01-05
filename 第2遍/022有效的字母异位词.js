/* 
  https://leetcode-cn.com/problems/valid-anagram/
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  let obj = {}
  for (const str of s) {
    if (obj[str]) {
      obj[str] = obj[str] + 1
    } else {
      obj[str] = 1
    }
  }

  for (const str of t) {
    if (obj[str] !== undefined) {
      obj[str] = obj[str] - 1
      if (obj[str] < 0) return false
    } else {
      return false
    }
  }

  return Object.values(obj).every(item => item === 0)
};

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  let dict = Array(26).fill(0)
  let aPoint = 'a'.codePointAt()

  for (const str of s) {
    const strPoint = str.codePointAt() - aPoint
    dict[strPoint]++
  }

  for (const str of t) {
    const strPoint = str.codePointAt() - aPoint
    dict[strPoint]--
    if (dict[strPoint] < 0) return false
  }

  return true
};

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('a', 'b'))
console.log(isAnagram('aacc', 'ccac'))
