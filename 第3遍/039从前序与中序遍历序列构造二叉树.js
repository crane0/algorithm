/* 
  https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
  参考：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by--22/
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }
  return build(preorder, 0, preorder.length, inorder, 0, inorder.length)

  function build(preorder, p_start, p_end, inorder, i_start, i_end) {
    if (p_start === p_end) return null
    const rootVal = preorder[p_start]
    const root = new TreeNode(rootVal)
    let rootIndex = map.get(rootVal)
    // for (let i = 0; i < inorder.length; i++) {
    //   if (rootVal === inorder[i]) {
    //     rootIndex = i
    //   }
    // }

    const leftLength = rootIndex - i_start
    root.left = build(preorder, p_start + 1, p_start + 1 + leftLength, inorder, i_start, rootIndex)
    root.right = build(preorder, p_start + 1 + leftLength, p_end, inorder, rootIndex + 1, i_end)
    return root
  }
};
