/* 
  https://leetcode-cn.com/problems/group-anagrams/

  相比 v1，只是换成了 map，性能貌似比 Object 快一些。
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (strs.length === 0) return [];
  let map = new Map()
  for (let char of strs) {
    let sortChar = char.split('').sort().join('')
    if (!map.get(sortChar)) {
      map.set(sortChar, [])
    }
    map.get(sortChar).push(char)
  }
  return [...map.values()]
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))