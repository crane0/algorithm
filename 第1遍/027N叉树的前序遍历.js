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
  const porder = (root) => {
    if (root === null) return
    list.push(root.val)
    for (const child of root.children) {
      porder(child)
    }
  }
  porder(root)
  return list
};
