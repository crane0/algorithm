/* 
  https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (root === null) return []
  let ret = []
  preorder(root)
  return ret
  
  function preorder(root) {
    if (root === null) return
    ret.push(root.val)
    preorder(root.left)
    preorder(root.right)
  }
};