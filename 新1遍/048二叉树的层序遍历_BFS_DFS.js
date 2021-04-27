/* 
  https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * bfs
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return []

  let queue = [root], list = []
  while (queue.length > 0) {
    let length = queue.length
    let arr = []
    while (length-- > 0) {
      const node = queue.shift()
      arr.push(node.val)
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }
    list.push(arr)
  }
  return list
}

/**
 * dfs
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if (root === null) return []

  let list = []
  dfs(0, root)
  return list

  function dfs(level, root) {
    if (root === null) {
      return
    }
    if (list.length <= level) {
      list.push([root.val])
    } else {
      list[level].push(root.val)
    }

    if (root.left !== null) dfs(level + 1, root.left)
    if (root.right !== null) dfs(level + 1, root.right)
  }
}