/* 
  https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (root === null) return []

  let queue = [root], ret = []
  while (queue.length > 0) {
    let length = queue.length
    let max = -Infinity
    while (length-- > 0) {
      const node = queue.shift()
      max = Math.max(node.val, max)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    ret.push(max)
  }
  return ret
};


// dfs
var largestValues = function(root) {
  if (root === null) return []

  let ret = []
  dfs(0, root)
  return ret

  function dfs(level, node) {
    if (ret.length <= level) {
      ret.push(node.val)
    } else {
      ret[level] = Math.max(node.val, ret[level])
    }
    if (node.left) dfs(level + 1, node.left)
    if (node.right) dfs(level + 1, node.right)
  }
};