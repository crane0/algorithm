/* 
  https://leetcode-cn.com/problems/binary-tree-level-order-traversal/#/description
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return []
  let list = []
  dfs(root, 0)
  return list

  function dfs(root, level) {
    if (root === null) return

    if (list.length <= level) {
      list[level] = [root.val]
    } else {
      list[level].push(root.val)
    }

    dfs(root.left, level + 1)
    dfs(root.right, level + 1)
  }
}