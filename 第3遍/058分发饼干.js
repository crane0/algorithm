/* 
  https://leetcode-cn.com/problems/assign-cookies/description/
*/
/**
 * @param {number[]} g 孩子胃口
 * @param {number[]} s 饼干数量
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => b - a)
  s = s.sort((a, b) => b - a)

  let sindex = 0
  for (let i = 0; i < g.length; i++) {
    if (s[sindex] >= g[i]) {
      sindex++
    }
  }
  return sindex
}
console.log(findContentChildren([1,2,3], [1, 1])) // 1