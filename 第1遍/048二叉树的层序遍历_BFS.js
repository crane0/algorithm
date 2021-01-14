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

  let queue = [root], ret = []
  while (queue.length) {
    let list = [], n = queue.length
    for (let i = 0; i < n; i++) {
      // 这里并没有判断 node 是否为 null 是因为
      // while 循环既然能进来，说明根节点 root 肯定不是 null，另外在 left 和 right 时判断了 null，所以 node 不会是 null 了
      let node = queue.shift()
      list.push(node.val)
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }
    ret.push(list)
  }
  return ret
}