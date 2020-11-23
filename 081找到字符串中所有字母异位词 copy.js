/* 
  https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/

  思路：滑动窗口问题解决。
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let sL = s.length, pL = p.length
  if (sL < pL) return [];

  let left = 0, right = 0, // 滑动窗口两侧索引
      windowMap = new Map(),  // 统计滑动窗口内每个 char 的数量
      pMap = new Map(), // 统计字符串 p 内每个 char 的数量
      valid = 0, // 滑动窗口 和 字符串 p 中数量相等的 char 的个数
      ret = [] // 结果集

  for (const char of p) {
    // pMap.set(char, pMap.has(char) ? pMap.get(char) + 1 : 0)
    pMap.set(char, (pMap.get(char) || 0) + 1)
  }

  while (right < sL) {
    let char = s[right++]
    if (pMap.has(char)) {
      windowMap.set(char, windowMap.has(char) ? windowMap.get(char) + 1 : 0);
      (windowMap.get(char) === pMap.get(char)) && valid++
    }

    if (right - left === pL) {
      // 滑动窗口内的字符数和 pL 相等时，并且 2 个 map 中每个 char 的数量都相等，说明找到异位词了。
      valid === pMap.size && ret.push(left)

      // 无论有没有找到异位词，left 都要右移了。
      let char = s[left++]
      if (pMap.has(char)) {
        // 如果 pMap 中有 char，并且 pMap 中 char 的数量和 windowMap 中的相等，（因为 left 要右移了，所以）valid--，
        (windowMap.get(char) === pMap.get(char)) && valid--;
        // 因为 left 要右移了，所以 windowMap 中的 char 数量也 - 1，
        windowMap.set(char, windowMap.get(char) - 1);
      }
    }
  }
  return ret
};

console.log(findAnagrams("cbaebabacd", "abc"))
// console.log(findAnagrams("abab", "ab"))
