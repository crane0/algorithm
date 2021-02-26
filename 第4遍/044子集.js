/* 
  https://leetcode-cn.com/problems/subsets/
*/
/* 
  使用分治的思想
  将 nums 数组当前 index 的内容分为填充，和不填充到 list 中的2种情况。
  list 就是要填充到 ans 中的元素。
*/
/* 
  使用分治的思想
  将当前位置分为填充，和不填充2种。
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let ret = [], queue = []
  dfs(0)
  return ret
  
  function dfs(level) {
    if (level === nums.length) {
      ret.push([...queue])
      return
    }

    dfs(level + 1)
    queue.push(nums[level])
    dfs(level + 1)
    queue.pop(nums[level])
  }
}

/* 
  [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/
console.log(subsets([1,2,3]))
