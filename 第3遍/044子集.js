/* 
  https://leetcode-cn.com/problems/subsets/
*/
/* 
  使用分治的思想
  将 nums 数组当前 index(位置) 的内容分为填充，和不填充到 list 中的2种情况。
  list 就是要填充到 ans 中的元素。
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (nums.length === 0) return []

  let ret = [], queue = []
  dfs(queue, 0)
  return ret

  function dfs(queue, level) {
    if (level === nums.length) {
      ret.push([...queue])
      return
    }
    dfs(queue, level + 1)
    queue.push(nums[level])
    dfs(queue, level + 1)
    queue.pop()
  }
}

/* 
  [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/
console.log(subsets([1,2,3]))
