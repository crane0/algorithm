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

  let queue = [root], list = []
  while (queue.length) {
    let n = queue.length
    let arr = []
    while (n-- > 0) {
      const node = queue.shift()
      arr.push(node.val)
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }
    list.push(arr)
  }
  return list
}
