/* 
  https://leetcode-cn.com/problems/assign-cookies/description/
*/
/**
 * @param {number[]} g 孩子胃口
 * @param {number[]} s 饼干数量
 * @return {number}
 */
var findContentChildren = function(g, s) {
  if (s.length === 0) return 0
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)

  let gIndex = 0, sIndex = 0
  while (gIndex < g.length && sIndex < s.length) {
    if (g[gIndex] <= s[sIndex]) {
      gIndex++
      sIndex++
    } else {
      sIndex++
    }
  }
  return gIndex
}
console.log(findContentChildren([1,2,3], [1, 1])) // 1
console.log(findContentChildren([10,9,8,7], [5,6,7,8])) // 1
