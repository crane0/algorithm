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
 * 使用 BFS 层序遍历
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (root === null) return 'null'

  let queue = [root], str = ''
  while (queue.length) {
    const node = queue.shift()
    if (node === null) {
      str += 'null,'
    } else {
      str += `${node.val},`
      queue.push(node.left)
      queue.push(node.right)
    }
  }
  return str
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data === 'null') return null
  
  let list = data.split(',')
  let index = 0
  const rootVal = list[index++]
  let root = new TreeNode(rootVal)
  let queue = [root]

  while (index < list.length - 1) {
    const node = queue.shift()

    const leftVal = list[index++]
    if (leftVal !== 'null') {
      node.left = new TreeNode(leftVal)
      queue.push(node.left)
    }

    const rightVal = list[index++]
    if (rightVal !== 'null') {
      node.right = new TreeNode(rightVal)
      queue.push(node.right)
    }
  }
  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */