/* 
  https://leetcode-cn.com/problems/permutations/
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let ret = [], queue = [], used = new Array(nums.length).fill(false)
  dfs(0)
  return ret

  function dfs(level) {
    if (level === nums.length) {
      ret.push([...queue])
      return
    }
    for (let i = 0; i < nums.length; i++) {
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
