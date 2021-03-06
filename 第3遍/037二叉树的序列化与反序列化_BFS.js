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
  if (root === null) return 'null'

  let queue = [root], ret = ''
  while (queue.length) {
    const node = queue.shift()
    if (node === null) {
      ret += `null,`
    } else {
      ret += `${node.val},`
      queue.push(node.left)
      queue.push(node.right)
    }

    // 如果按照下面的写法，就是前序遍历了。
    // let n = queue.length
    // while (n-- > 0) {
    //   const node = queue.shift()
    //   ret += `${node.val},`
    //   node.left === null ? ret += 'null,' : queue.push(node.left)
    //   node.right === null ? ret += 'null,' : queue.push(node.right)
    // }
  }
  return ret
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data === 'null') return null
  let list = data.split(','), index = 0
  const root = new TreeNode(list[index++])
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