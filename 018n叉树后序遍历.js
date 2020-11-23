/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal(root) {
  if (root === null) return []
  let list = []
  function postorder(root) {
    root.children.map(item => {
      postorder(item)
    })
    list.push(root.val)
  }
  postorder(root)
  return list
}