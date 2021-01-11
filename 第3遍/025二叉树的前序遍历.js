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
  let list = []
  preorder(root)
  return list

  function preorder(root) {
    if (root === null) return
    list.push(root.val)
    preorder(root.left)
    preorder(root.right)
  }
};