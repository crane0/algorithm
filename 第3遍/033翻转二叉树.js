/* 
  https://leetcode-cn.com/problems/invert-binary-tree/description/
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === []) return []
  dfs(root)
  return root
  function dfs(root) {
    if (root === null) return
    [root.left, root.right] = [root.right, root.left]
    dfs(root.left)
    dfs(root.right)
  }
}

var invertTree = function(root) {
  if (root === null) return null
  [root.left, root.right] = [root.right, root.left]
  invertTree(root.left)
  invertTree(root.right)
  return root
  
}