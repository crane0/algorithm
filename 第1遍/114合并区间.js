/* 
  https://leetcode-cn.com/problems/merge-intervals/
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) return intervals
  intervals = intervals.sort((a, b) => a[0] - b[0])

  let ret = []
  for (const item of intervals) {
    const L = item[0], R = item[1]
    if (!ret.length || ret[ret.length - 1][1] < L) {
      ret.push(item)
    } else {
      ret[ret.length - 1][1] = Math.max(ret[ret.length - 1][1], R)
    }
  }
  return ret
}
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))