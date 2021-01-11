/* 
  https://leetcode-cn.com/problems/combinations/
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if (n < k || k <= 0) return []
  let queue = [], ret = []
  dfs(n, k, 1, queue)
  return ret

  function dfs(n, k, begin, queue) {
    if (k === 0) {
      ret.push([...queue])
      return
    }
    // 剪枝上界
    if (begin > n - k + 1) {
      return
    }
    dfs(n, k, begin + 1, queue)

    queue.push(begin)
    dfs(n, k-1, begin + 1, queue)
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
