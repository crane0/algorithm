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
var inorderTraversal = function(root) {
  if(root === null) return []
  let list = []
  function inorder(root) {
      if(root.left !== null) {
          inorder(root.left)
      }
      list.push(root.val)
      if(root.right !== null) {
          inorder(root.right)
      }
  }
  inorder(root)
  return list
};

/* 
  无法本地测试，因为 root 结构并没有
  可参考链接线上调试：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
  比如，可以打印 root.left 
*/