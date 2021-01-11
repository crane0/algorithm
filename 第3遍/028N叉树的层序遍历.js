/* 
  https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
*/
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return
  let list = []
  order(root, 0)
  return list

  function order(root, level) {
    if (root === null) return
    if (list[level]) {
      list[level].push(root.val)
    } else {
      list[level] = [root.val]
    }
    // 或
    // if (list.length <= level) {
    //   list[level] = [root.val]
    // } else {
    //   list[level].push(root.val)
    // }
    root.children.forEach(item => order(item, level + 1))
  }
};