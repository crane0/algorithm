// 使用 DFS 做，需要记录下当前在那一层，把这些元素加在对应的层即可。
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
  let list = []
  // 注意了，其实不用下面注释掉的代码，因为无论是前中后序遍历，都是DFS。。。
  // const visited = new Set()
  function dfs(root, level) {
    // if (visited.has(root)) return
    // visited.add(root)
    if (list.length -1 < level) {
      list.push([])
    }
    list[level].push(root.val)
    if(root.left) dfs(root.left, level + 1)
    if(root.right) dfs(root.right, level + 1)
  };

  if(root !== null) {
    dfs(root, 0)
  }
  return list
};
