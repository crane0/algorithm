/* 
  https://leetcode-cn.com/problems/assign-cookies/description/
*/
/**
 * @param {number[]} g 孩子胃口
 * @param {number[]} s 饼干数量
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let child = g.sort((a, b) => a - b)
  let cookie = s.sort((a, b) => a - b)

  let index = 0, count = 0
  for (const c of cookie) {
    if (c >= child[index]) {
      index++
      count++
    }
  }
  
  return count
}

var findContentChildren = function(g, s) {
  let child = g.sort((a, b) => a - b)
  let cookie = s.sort((a, b) => a - b)

  let childIndex = 0, cookieIndex = 0, count = 0
  // 同时判断2个数组
  while (childIndex < child.length && cookieIndex < cookie.length) {
    if (cookie[cookieIndex] >= child[childIndex]) {
      childIndex++
      count++
    }
    cookieIndex++
  }
  return count
}

console.log(findContentChildren([1,2,3], [1, 1])) // 1