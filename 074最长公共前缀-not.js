/* 
  https://leetcode-cn.com/problems/longest-common-prefix/description/

  下面的方法写差了，写成了最长公共子序列
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length < 1) {
    return ''
  } else if (strs.length === 1) {
    return strs[0]
  }

  let shortest = strs.sort((a, b) => a.length - b.length)[0]
  let start = 0, end = 0, str = '', boo = true

  for (const short of shortest) {
    for (const element of strs) {
      if (element[end] !== short) {
        boo = false
        str = str.length > shortest.slice(start, end).length ? str : shortest.slice(start, end)
        start = end + 1 // 因为break 掉 for 循环，end 会++
        break
      }
    }
    end++
  }
  return boo ? shortest : str
};

// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
// console.log(longestCommonPrefix(["ab","a"]))
console.log(longestCommonPrefix(["babb","caa"]))
