/* 
  242 https://leetcode-cn.com/problems/valid-anagram/

  给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
  异位词：2个字符串中，每个字符出现的个数相同，排列顺序不同

  输入: s = "anagram", t = "nagaram"
  输出: true

  输入: s = "rat", t = "car"
  输出: false
*/

/* 
  如果字符串的范围在a-z 中，用数组就可以解决。
    参照官方题解（java），js 中要使用 s[i].charCodeAt() - 'a'.charCodeAt()
    另外，要先构造一个都是0 ，length 是26 的数组。在js 中只能使用循环实现。
  如果是所有的Unicode字符，还是要使用哈希表，在 js 中就是对象。

  v2，排序后看是否相等。
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s = '', t = '') {
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


// var isAnagram = function (s = '', t = '') {
//   if (s.length !== t.length) {
//     return false
//   }
//   return s.split('').sort().join('') === t.split('').sort().join('')
// };


isAnagram('adfafdfd', 'adfafddf')