/* 
  https://leetcode-cn.com/problems/permutations/
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 0) return []

  let ret = [], queue = [], n = nums.length
  let used = Array.from(n).fill(false)
  dfs(0)
  return ret

  function dfs(level) {
    if (n === level) {
      ret.push([...queue])
      return
    }

    for (let i = 0; i < n; i++) {
      if (!used[i]) {
        queue.push(nums[i])
        used[i] = true
        dfs(level + 1)
        queue.pop(nums[i])
        used[i] = false
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
