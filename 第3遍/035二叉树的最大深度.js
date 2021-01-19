/* 
  https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) return 0

  let depth = 0
  dfs(root, 0)
  return depth

  function dfs(root, level) {
    if (root === null) {
      depth = Math.max(depth, level)
      return
    }
    dfs(root.left, level + 1)
    dfs(root.right, level + 1)
  }
}


var maxDepth = function(root) {
  if (root === null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}