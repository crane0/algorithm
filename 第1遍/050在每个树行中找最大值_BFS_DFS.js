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
    let list = [], n = queue.length
    for (let i = 0; i < n; i++) {
      const node = queue.shift()
      list.push(node.val)
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }
    ret.push(Math.max(...list))
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

    if (list.length <= level) {
      list[level] = [root.val]
    } else {
      const max = Math.max(root.val, list[level][0])
      list[level] = [max]
    }

    dfs(root.left, level + 1)
    dfs(root.right, level + 1)
  }
};