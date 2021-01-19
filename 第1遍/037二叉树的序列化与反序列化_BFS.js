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
 * 使用层序遍历，不是前序！并且是BFS
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let queue = [root]
  let ret = []
  while (queue.length) {
    const node = queue.shift()
    if (node === null) {
      ret.push('null');
    } else {
      ret.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    }
  }
  return ret.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data === 'null') return null
  
  const list = data.split(',')
  const root = new TreeNode(list[0])
  let queue = [root]
  let index = 1

  while (index < list.length) {
    const node = queue.shift()
    const leftVal = list[index]
    const rightVal = list[index+1]

    if (leftVal !== 'null') {
      const leftNode = new TreeNode(leftVal)
      node.left = leftNode
      queue.push(leftNode)
    }
    if (rightVal !== 'null') {
      const rightNode = new TreeNode(rightVal)
      node.right = rightNode
      queue.push(rightNode)
    }
    index += 2
  }
  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */