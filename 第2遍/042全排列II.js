/* 
  https://leetcode-cn.com/problems/permutations-ii/
  解题思路：
  https://leetcode-cn.com/problems/permutations-ii/solution/hui-su-suan-fa-python-dai-ma-java-dai-ma-by-liwe-2/
*/
/**
 * 注意排序
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length === 0) return []

  let ret = [], queue = [], n = nums.length
  let used = Array.from(n).fill(false)
  nums = nums.sort() //排序是关键
  dfs(0)
  return ret

  function dfs(level) {
    if (level === n) {
      ret.push([...queue])
      return
    }

    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i-1] === nums[i] && !used[i-1]) continue;

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
