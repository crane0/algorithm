/* 
  https://leetcode-cn.com/problems/longest-common-prefix/description/
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0]

  strs = strs.sort() // 按编码排序

  const min = strs[0]
  const max = strs[strs.length - 1]
  let ret = ''

  for (let i = 0; i < min.length; i++) {
    if (min[i] === max[i]) {
      ret += min[i]
    } else {
      break
    }
  }
  return ret
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
// console.log(longestCommonPrefix(["ab","a"]))
// console.log(longestCommonPrefix(["babb","caa"]))
