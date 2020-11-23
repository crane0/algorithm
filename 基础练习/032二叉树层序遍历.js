// 使用 BFS
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(root === null || root === []) return []
  return bfs(root)
  function bfs(root) {
    // 注意第一次 queue.length == 1
    let result = [], queue = [root]
    while (queue.length > 0) {
      // 保证循环遍历的 n 不变
      let level = [], n = queue.length
      // 每次都是从最后取出 pop，在开头添加 unshift
      for (let i = 0; i < n; i++) {
        let node = queue.pop()
        level.push(node.val) 
        if (node.left) queue.unshift(node.left)
        if (node.right) queue.unshift(node.right)
      }
      result.push(level)
    }
    return result
  };
};

