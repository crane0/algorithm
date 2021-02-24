/* 
  https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
  注意最小深度的定义，和层数是一样的！
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
var minDepth = function(root) {
  if (root === null) return 0
  let queue = [root], count = 1
  while (queue.length) {
    let n = queue.length
    while (n-- > 0) {
      const node = queue.shift()
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)

      if (node.left === null && node.right === null) {
        return count
      }
    }
    count++
  }
  return 0
}

// 更简洁的
var minDepth = function(root) {
  if (root === null) return 0
  
  const left = minDepth(root.left)
  const right = minDepth(root.right)
  return left === 0 || right === 0 ? left + right + 1 : Math.min(left, right) + 1
}