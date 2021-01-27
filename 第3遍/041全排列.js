/* 
  https://leetcode-cn.com/problems/permutations/
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let visited = new Set(), ret = [], queue = []
  dfs(queue, 0)
  return ret

  function dfs(queue, level) {
    if (level === nums.length) {
      ret.push([...queue])
      return
    }

    for (const num of nums) {
      if (!visited.has(num)) {
        queue.push(num)
        visited.add(num)
        dfs(queue, level+1)
        queue.pop()
        visited.delete(num)
      }
    }
  }
};

/* 
  [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
  ]
*/
console.log(permute([1,2,3]))
