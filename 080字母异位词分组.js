/* 
  https://leetcode-cn.com/problems/group-anagrams/
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (strs.length === 0) return [];
  let ret = {}
  for (let char of strs) {
    let sortChar = char.split('').sort().join('')
    if (!ret[sortChar]) {
      ret[sortChar] = []
    }
    ret[sortChar].push(char)
  }
  return Object.values(ret)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))