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
  while (queue.length) {
    let n = queue.length
    let number = -Infinity
    while (n-- > 0) {
      const node = queue.shift()
      number = Math.max(number, node.val)
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }
    ret.push(number)
  }
  return ret
};


var largestValues = function(root) {
  if (root === null) return []

  let list = []
  dfs(root, 0)
  return list

  function dfs(root, level) {
    if (root === null) return

    if (level < list.length) {
      list[level] = Math.max(root.val, list[level])
    } else [
      list[level] = root.val
    ]

    dfs(root.left, level + 1)
    dfs(root.right, level + 1)
  }
}