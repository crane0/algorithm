/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/* 
  注意审题，最小深度指的是 根节点到最近叶子节点的最短路径上的 **节点数量**
  所以，当 === null 时，要 + 1
*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (root === null) {
    return 0
  // 使用 else if 的好处时，无论 left 和 right 那个先到达 null ，剩下一个就不用再递归了。
  } else if (root.left == null) {
    return minDepth(root.right) + 1
  } else if (root.right == null) {
    return minDepth(root.left) + 1
  } else {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
  }
};


var minDepth = function(root) {
  if(root === null) return 0;
  let m1 = minDepth(root.left);
  let m2 = minDepth(root.right);
  return m1 === 0 || m2 === 0 ? m1 + m2 + 1 : Math.min(m1, m2) + 1;
};
