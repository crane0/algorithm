/* 
  https://leetcode-cn.com/problems/group-anagrams/
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (strs.length === 0) return [];

  let obj = {}
  for (const str of strs) {
    // 排序后唯一
    let sortStr = Array.from(str).sort().join('')
    obj[sortStr] ? obj[sortStr].push(str) : obj[sortStr] = [str]
  }
  return Object.values(obj)
};

var groupAnagrams = function(strs) {
  if (strs.length === 0) return [];

  const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]
  const aPoint = 'a'.codePointAt()
  let map = new Map()
  
  for (const str of strs) {
    let count = 1
    for (let i = 0; i < str.length; i++) {
      // 因为每个字母对应的数字在 prime 中，相乘得到的是唯一的（质数相乘）。
      count *= prime[str[i].codePointAt() - aPoint]
    }
    if (map.has(count)) {
      map.get(count).push(str)
    } else {
      map.set(count, [str])
    }
  }
  return [...map.values()]
};

/* 
  [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
  ]
*/
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
