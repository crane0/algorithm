/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) return intervals;
  
  let arr = intervals.sort((a, b) => a[0] - b[0])
  
  return mergeSub(arr)

  function mergeSub(arr) {
    let result = []
    let n = arr.length - 1
    for (let i = 1; i <= n; i++) {
      if (arr[i-1][1] >= arr[i][0]) {
        arr[i] = [arr[i-1][0], Math.max(arr[i-1][1], arr[i][1])]
      } else {
        result.push(arr[i-1])
      }
    }
    result.push(arr[n])
    return result
  }

};
