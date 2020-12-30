/* 
  https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
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
var inorderTraversal = function(root) {
  if (root === null) return []
  const ret = []
  const inorder = (root) => {
    if (root === null) return
    inorder(root.left)
    ret.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return ret
};