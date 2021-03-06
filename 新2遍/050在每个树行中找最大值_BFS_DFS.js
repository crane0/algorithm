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

  let queue = [root], list = []
  while (queue.length > 0) {
    let length = queue.length
    let max = -Infinity
    while (length-- > 0) {
      const node = queue.shift()
      max = Math.max(max, node.val)
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }
    list.push(max)
  }
  return list
};


// dfs
var largestValues = function(root) {
  if (root === null) return []

  let list = []
  dfs(0, root)
  return list
  
  function dfs(level, root) {
    if (list.length <= level) {
      list.push(root.val)
    } else {
      list[level] = Math.max(root.val, list[level])
    }

    if (root.left !== null) dfs(level + 1, root.left)
    if (root.right !== null) dfs(level + 1, root.right)
  }
};