/* 
  https://leetcode-cn.com/problems/group-anagrams/
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map()
  for (const str of strs) {
    const sortStr = str.split('').sort().join('');
    if (map.has(sortStr)) {
      map.get(sortStr).push(str)
    } else {
      map.set(sortStr, [str])
    }
  }
  return [...map.values()]
};

var groupAnagrams = function(strs) {
  const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
  const aPoint = 'a'.codePointAt()
  let map = new Map()
  for (const str of strs) {
    let count = 1
    for (const s of str) {
      count *= prime[s.codePointAt() - aPoint]
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
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
// console.log(groupAnagrams([""]))
