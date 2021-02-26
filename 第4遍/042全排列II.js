/* 
  https://leetcode-cn.com/problems/permutations-ii/
  解题思路：
  https://leetcode-cn.com/problems/permutations-ii/solution/hui-su-suan-fa-python-dai-ma-java-dai-ma-by-liwe-2/
*/
/**
 * 前提要先排序
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums = nums.sort()
  let ret = [], queue = [], used = new Array(nums.length).fill(false)
  dfs(0)
  return ret

  function dfs(level) {
    if (level === nums.length) {
      ret.push([...queue])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue

      if (i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue

      queue.push(nums[i])
      used[i] = true
      dfs(level + 1)
      queue.pop(nums[i])
      used[i] = false
    }
  }
};

/* 
  [
    [1,1,2],
    [1,2,1],
    [2,1,1]
  ]
*/
console.log(permuteUnique([1,1,2]))
