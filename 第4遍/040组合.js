/* 
  https://leetcode-cn.com/problems/combinations/
*/

/**
 * 注意上界
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if (n < k || k < 0) return []

  let ret = [], queue = []
  dfs(n, k, 1)
  return ret

  function dfs(n, k, begin) {
    if (k === 0) {
      ret.push([...queue])
      return
    }
    if (begin > n - k + 1) {
      return
    }
    dfs(n, k, begin + 1)
    queue.push(begin)
    dfs(n, k - 1, begin + 1)
    queue.pop(begin)
  }
};

/* 
  [
    [2,4],
    [3,4],
    [2,3],
    [1,2],
    [1,3],
    [1,4],
  ]
*/
console.log(combine(4, 2))
