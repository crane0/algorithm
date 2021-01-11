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
    // 上次循环进入后，如果子树长度为0，那 p_start === p_end
    if (p_start === p_end) return null;
    const rootVal = preorder[p_start]
    const node = new TreeNode(rootVal)
    const rootIndex = map.get(rootVal)
    // 这是根据 inorder 得出的左子树长度！！！，所以才可以在 preorder 中确定左子树的长度！
    const leftLength = rootIndex - i_start

    node.left = build(preorder, p_start + 1, p_start + 1 + leftLength, inorder, i_start, rootIndex)
    node.right = build(preorder, p_start + 1 + leftLength, p_end, inorder, rootIndex + 1, i_end)
    return node
  }
};
