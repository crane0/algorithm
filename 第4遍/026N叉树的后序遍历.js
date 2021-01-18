/* 
  https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
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
 * @return {number[]}
 */
var postorder = function(root) {
  if (root === null) return []
  let list = []
  porder(root)
  return list

  function porder(root) {
    if (root === null) return
    for (const child of root.children) {
      porder(child)
    }
    list.push(root.val)
  }
};