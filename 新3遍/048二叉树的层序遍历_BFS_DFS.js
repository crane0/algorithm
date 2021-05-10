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
  while (queue.length) {
    let length = queue.length
    let temp = []
    while (length-- > 0) {
      const node = queue.shift()
      temp.push(node.val)
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
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
  function dfs(level, node) {
    if (node === null) return
    if (list.length <= level) {
      list[level] = [node.val]
    } else {
      list[level].push(node.val)
    }
    dfs(level + 1, node.left)
    dfs(level + 1, node.right)
  }
  return list
}