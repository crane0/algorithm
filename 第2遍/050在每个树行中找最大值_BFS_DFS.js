/* 
  https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/#/description
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
  while (queue.length) {
    let n = queue.length
    let tempNumber = -Infinity
    while (n-- > 0) {
      const node = queue.shift()
      tempNumber = Math.max(tempNumber, node.val)
      if(node.left !== null) queue.push(node.left)
      if(node.right !== null) queue.push(node.right)
    }
    ret.push(tempNumber)
  }
  return ret
};

var largestValues = function(root) {
  if (root === null) return []

  let list = new Map()
  dfs(root, 0)
  return [...list.values()]

  function dfs(root, level) {
    if (root === null) return

    if (list.size <= level) {
      list.set(level, root.val)
    } else {
      list.set(level, Math.max(root.val, list.get(level)))
    }
    dfs(root.left, level + 1)
    dfs(root.right, level + 1)
  }
};