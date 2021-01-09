/* 
  https://leetcode-cn.com/problems/permutations/
  解法：https://leetcode-cn.com/problems/permutations/solution/hui-su-suan-fa-python-dai-ma-java-dai-ma-by-liweiw/
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 0) return []
  if (nums.length === 1) return [nums]

  let ret = [], queue = [], n = nums.length
  let used = new Array(n).fill(false)

  dfs(0)
  return ret

  function dfs(level) {
    if (level === n) {
      ret.push([...queue])
      return
    }
    for (let i = 0; i < n; i++) {
      if (!used[i]) {
        queue.push(nums[i])
        used[i] = true
        dfs(level+1)
        used[i] = false
        queue.pop(nums[i])
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
