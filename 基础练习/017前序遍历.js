/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root) {
  if (root === null) return []
  let list = []
  function preorder(root) {
    if (root !== null) {
      list.push(root.val)
      preorder(root.left)
      preorder(root.right)
    }
  }
  preorder(root)
  return list
}