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

  let map = {}
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ? map[s[i]]+1 : 1
  }
  console.log(map)

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] !== undefined) {
      map[t[i]]--
    }
  }
  console.log(map)

  for (const key in map) {
    if (map[key] !== 0) return false
  }
  return true
};

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  let arr = Array(26).fill(0)
  
  for (let i = 0; i < s.length; i++) {
    arr[s[i].codePointAt() - 'a'.codePointAt()]++
  }

  for (let i = 0; i < t.length; i++) {
    arr[t[i].codePointAt() - 'a'.codePointAt()]--
    // 因为字符串长度相同，如果字母的数量不等，有多的则必然有少的
    if (arr[t[i].codePointAt() - 'a'.codePointAt()] < 0) {
      return false
    }
  }
  return true
};

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('a', 'b'))
console.log(isAnagram('aacc', 'ccac'))
