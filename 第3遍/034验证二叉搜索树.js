/* 
  https://leetcode-cn.com/problems/validate-binary-search-tree/
  二叉搜索树，中序遍历是递增的。
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  let pre = -Infinity
  return isValid(root)

  function isValid(root) {
    if (root === null) return true
    
    if (!isValid(root.left)) return false

    if (root.val <= pre) return false

    pre = root.val
    
    return isValid(root.right)
  }
}