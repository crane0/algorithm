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
  return mybuild(preorder, 0, preorder.length, inorder, 0, inorder.length)

  function mybuild(preorder, p_start, p_end, inorder, i_start, i_end) {
    // 上次循环进入后，如果子树长度为0，那 p_start === p_end
    if (p_start === p_end) return null;

    const rootVal = preorder[p_start]
    let root = new TreeNode(rootVal)

    let root_index = 0
    for (let i = 0; i < inorder.length; i++) {
      if (inorder[i] === rootVal) {
        root_index = i
        break
      }
    }

    // 这是根据 inorder 得出的左子树长度！！！，所以才可以在 preorder 中确定左子树的长度！
    const leftNum = root_index - i_start
    root.left = mybuild(preorder, p_start + 1, p_start + 1 + leftNum, inorder, i_start, root_index)
    root.right = mybuild(preorder, p_start + 1 + leftNum, p_end, inorder, root_index + 1, i_end)
    return root
  }
};

var buildTree = function(preorder, inorder) {
  // 将每次都要做的循环，先放入 map 中
  let map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }
  return mybuild(preorder, 0, preorder.length, inorder, 0, inorder.length)

  function mybuild(preorder, p_start, p_end, inorder, i_start, i_end) {
    // 上次循环进入后，如果子树长度为0，那 p_start === p_end
    if (p_start === p_end) return null;

    const rootVal = preorder[p_start]
    let root = new TreeNode(rootVal)

    let root_index = map.get(rootVal)

    // 这是根据 inorder 得出的左子树长度！！！，所以才可以在 preorder 中确定左子树的长度！
    const leftNum = root_index - i_start
    root.left = mybuild(preorder, p_start + 1, p_start + 1 + leftNum, inorder, i_start, root_index)
    root.right = mybuild(preorder, p_start + 1 + leftNum, p_end, inorder, root_index + 1, i_end)
    return root
  }
};