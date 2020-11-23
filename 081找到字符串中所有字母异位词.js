/* 
  https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/

  超时！！
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let sL = s.length, pL = p.length
  if (sL < pL) return [];

  let ret = []
  for (let i = 0; i <= sL - pL; i++) {
    let char = s.slice(i, i + pL)
    if (isAnagram(char, p)) {
      ret.push(i)
    }
  }
  return ret

  function isAnagram(s = '', t = '') {
    if (s.length !== t.length) {
      return false
    }
    const counter = {}
    for (let i = 0; i < s.length; i++) {
      // 注意最后是 1 和 -1，正好可以中和。
      // 如果都是 0 的话，比如 s = 'a', t = 'b' 就不行了。
      counter[s[i]] ? counter[s[i]]++ : (counter[s[i]] = 1)
      counter[t[i]] ? counter[t[i]]-- : (counter[t[i]] = -1)
    }
    for (const c in counter) {
      if (counter[c]) {
        return false
      }
    }
    return true
  };
};

console.log(findAnagrams("cbaebabacd", "abc"))
// console.log(findAnagrams("abab", "ab"))
