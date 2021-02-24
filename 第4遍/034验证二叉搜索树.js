/* 
  https://leetcode-cn.com/problems/validate-binary-search-tree/
  二叉搜索树，中序遍历是递增的。
  所以，也可直接中序遍历为数组，再判断数组是否升序。
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

    /* 
      遍历 root.left 直到根节点后，因为 pre = -Infinity 所以第一次不会满足，
      pre 会在之后赋值为左子节点 root.val
      接着遍历右子节点，直接返回了。
      回溯到左子节点的父节点，因为中序遍历是升序的，而 pre 目前是左子节点的值，
      所以如果 父节点 <= pre 就说明不是升序的。
    */
    if (root.val <= pre) return false

    pre = root.val

    return isValid(root.right)
  }
}