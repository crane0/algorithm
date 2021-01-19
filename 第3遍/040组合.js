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

  let ret = []
  dfs([], 1, k)
  return ret

  function dfs(queue, begin, k) {
    if (k === 0) {
      ret.push([...queue])
      return
    }

    if (begin > n - k + 1) {
      return
    }
    dfs(queue, begin + 1, k)
    queue.push(begin)
    dfs(queue, begin + 1, k - 1)
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
