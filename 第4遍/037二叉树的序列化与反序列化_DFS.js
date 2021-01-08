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
 
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */