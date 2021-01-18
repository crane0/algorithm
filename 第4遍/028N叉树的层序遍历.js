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
  if (root === null) return []
  
  let list = []
  lOrder(root, 0)
  return list

  function lOrder(root, level) {
    if (root === null) return
    if (list.length <= level) {
      list[level] = [root.val]
    } else {
      list[level].push(root.val)
    }
    for (const child of root.children) {
      lOrder(child, level+1)
    }
  }
};