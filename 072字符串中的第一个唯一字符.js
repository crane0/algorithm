/* 
  https://leetcode-cn.com/problems/first-unique-character-in-a-string/

  思路，利用 Map 能保证插入顺序的特性，遍历并计数，再找到第一个数量为 1 的
*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) ? map.get(s[i]) + 1: 1)
  }

  for (const [key, value] of map) {
    if (value === 1) return s.indexOf(key)
  }
  return -1
};

// console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar("leetcode"))
