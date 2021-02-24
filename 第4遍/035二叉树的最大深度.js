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
  if (root === null) return 0

  let queue = [root], count = 0
  while (queue.length) {
    let n = queue.length
    while (n-- > 0) {
      const node = queue.shift()
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }
    count++
  }
  return count
}


// 更简洁的
var maxDepth = function(root) {
  if (root === null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}