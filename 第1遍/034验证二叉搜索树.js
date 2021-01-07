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

    // 会一直遍历到最深的左子树，如果是 null 那就返回 true，之后才会走下一个 if 判断根和右子树
    if (!isValid(root.left)) return false

    // 第一个不会进入，接着会赋值为根节点，接着进行右子树的遍历
    if (root.val <= pre) return false

    pre = root.val

    return isValid(root.right)
  }
}