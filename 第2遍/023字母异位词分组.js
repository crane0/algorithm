/* 
  https://leetcode-cn.com/problems/group-anagrams/
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let obj = {}
  for (const str of strs) {
    let sortStr = str.split('').sort().join('')
    if (obj[sortStr]) {
      obj[sortStr].push(str)
    } else {
      obj[sortStr] = [str]
    }
  }
  return Object.values(obj)
};

var groupAnagrams = function(strs) {
  const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]
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
