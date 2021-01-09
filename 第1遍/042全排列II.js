/* 
  https://leetcode-cn.com/problems/permutations-ii/
  解题思路：
  https://leetcode-cn.com/problems/permutations-ii/solution/hui-su-suan-fa-python-dai-ma-java-dai-ma-by-liwe-2/
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length === 0) return []
  if (nums.length === 1) return [nums]

  let ret = [], queue = [], n = nums.length
  let used = new Array(n).fill(false)
  nums = nums.sort() // 排序是基础

  dfs(0)
  return ret

  function dfs(level) {
    if (level === n) {
      ret.push([...queue])
      return
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) {
        continue
      }
      // !used[i-1] 这里是关键点，看图示，不加 ！剪的是②，加了剪的是①
      // ①对应的是上次 dfs 后，刚刚弹出相同的，则这次就不要他了。
      if (i > 0 && nums[i] === nums[i-1] && !used[i-1]) {
        continue
      }
      queue.push(nums[i])
      used[i] = true
      dfs(level+1)
      used[i] = false
      queue.pop(nums[i])
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
