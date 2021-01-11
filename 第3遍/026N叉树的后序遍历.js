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
    root.children.map(item => {
      porder(item)
    })
    list.push(root.val)
  }
};