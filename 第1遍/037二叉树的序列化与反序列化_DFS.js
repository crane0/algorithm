/* 
  https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 * 使用前序遍历，并且是DFS，也就是函数会先一直遍历到最底层的左子树。
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (root === null) {
    return 'null'
  } 
  const left = serialize(root.left)
  const right = serialize(root.right)
  return root.val + ',' + left + ',' + right
};

/**
 * Decodes your encoded data to tree.
 * 使用了 list.shift()，并不是最优的
 * 同样的，先一直遍历到最底层的左子树。
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const list = data.split(',')
  return buildTree(list)

  function buildTree(list) {
    const rootVal = list.shift()
    if (rootVal === 'null') return null
    const root = new TreeNode()
    root.val = rootVal
    root.left = buildTree(list)
    root.right = buildTree(list)
    return root
  }
};

/* 
  list.shift() 每次都会发生群移，性能并不好
*/
var deserialize = function(data) {
  const list = data.split(',')
  let index = 0
  return buildTree(list)

  function buildTree(list) {
    const rootVal = list[index]
    index++
    if (rootVal === 'null') return null
    const root = new TreeNode()
    root.val = rootVal
    root.left = buildTree(list)
    root.right = buildTree(list)
    return root
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */