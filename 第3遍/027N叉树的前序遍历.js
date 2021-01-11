/* 
  https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/description/
*/
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (root === null) return []
  let list = []
  porder(root)
  return list

  function porder(root) {
    if (root === null) return
    list.push(root.val)
    root.children.map(item => porder(item))
  }
};
