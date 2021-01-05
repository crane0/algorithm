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
  let ret = []
  order(root)
  return ret

  function order(root) {
    if (root === null) return
    ret.push(root.val)
    for (const child of root.children) {
      order(child)
    }
  }
};
