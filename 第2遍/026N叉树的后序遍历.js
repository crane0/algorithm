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
  let ret = []
  order(root)
  return ret

  function order(root) {
    if (root === null) return
    for (const child of root.children) {
      order(child)
    }
    ret.push(root.val)
  }
};