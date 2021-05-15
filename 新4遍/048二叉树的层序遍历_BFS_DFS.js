/* 
  https://leetcode-cn.com/problems/binary-tree-level-order-traversal
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * BFS
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return []

  let queue = [root], list = []
  while (queue.length > 0) {
    let length = queue.length
    let temp = []
    while (length-- > 0) {
      const node = queue.shift()
      temp.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    list.push(temp)
  }
  return list
}

/**
 * DFS
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return []
  let list = []
  dfs(0, root)
  return list

  function dfs(level, node) {
    if (list.length <= level) {
      list.push([node.val])
    } else {
      list[level].push(node.val)
    }
    if (node.left) dfs(level + 1, node.left)
    if (node.right) dfs(level + 1, node.right)
  }
}