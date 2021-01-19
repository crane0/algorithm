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
  if (root === null) return 'null'

  let ret = ''
  dfs(root)
  return ret
  
  function dfs(root) {
    if (root === null) {
      ret += 'null,'
      return
    }
    ret += `${root.val},`
    dfs(root.left)
    dfs(root.right)
  }
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
  if (data === 'null') return null
  let list = data.split(','), index = 0
  return dfs()

  function dfs() {
    const rootVal = list[index++]
    if (rootVal === 'null') return null

    const root = new TreeNode(rootVal)
    root.left = dfs()
    root.right = dfs()
    return root
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */