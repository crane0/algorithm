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
  let depth = 0
  recur(root, 0)
  return depth

  function recur(root, level) {
    if (root === null) {
      depth = Math.max(depth, level)
      return
    }
    recur(root.left, level + 1)
    recur(root.right, level + 1)
  }
}