/* 
  https://leetcode-cn.com/problems/longest-common-prefix/description/
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

  let shortest = strs.sort((a, b) => a.length - b.length)[0];
  let index = 0;

  // 如何跳出外层循环 https://www.cnblogs.com/front-end-ralph/p/6500829.html
  loop: for (const short of shortest) {
    for (const element of strs) {
      if (element[index] !== short) {
        break loop;
      }
    }
    index++
  }
  return shortest.slice(0, index)
};

// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["ab","a"]))
// console.log(longestCommonPrefix(["babb","caa"]))
