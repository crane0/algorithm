/* 
  https://leetcode-cn.com/problems/assign-cookies/

  也是贪心的思想，排序后，从胃口最小的孩子开始满足，就能尽可能的满足越多数量的孩子。
*/
/**
 * @param {number[]} g 孩子胃口
 * @param {number[]} s 饼干数量
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)

  let count = 0
  let gIndex = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= g[gIndex]) {
      count++
      gIndex++
    }
  }
  return count
};

console.log(findContentChildren([10,9,8,7], [5,6,7,8]))