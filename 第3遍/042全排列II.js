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
  nums = nums.sort()
  let ret = [], queue = []
  // 注意要用 boolean 做判断是否使用，而不是 Set，因为有重复的元素。
  let visited = new Array(nums.length).fill(false)
  dfs(queue, 0)
  return ret

  function dfs(queue, level) {
    if (level === nums.length) {
      ret.push([...queue])
      return 
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) {
        continue
      }
      if (i > 0 && nums[i] === nums[i-1] && !visited[i-1]) {
        continue
      }

      queue.push(nums[i])
      visited[i] = true
      dfs(queue, level + 1)
      queue.pop()
      visited[i] = false
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
