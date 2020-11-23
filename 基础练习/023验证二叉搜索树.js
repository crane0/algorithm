/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  // leetcode 只会执行 isValidBST 函数，如果 pre 定义在外面的全局中，在跑测试用例时，用的是一个！
  let pre = -Infinity
  return test(root)

  function test(root) {
    if (root === null) return true
    /* 
      输入 [2,1,3]，打印如下
      [2,1,3] 2 [1] [3]
      [1] 1 null null
      [3] 3 null null
    */
    // console.log(root, root.val, root.left, root.right)

    // 判断不满足的条件即可，因为之后还有判断。
    if (!test(root.left)) {
      return false
    }

    // 需满足：当前节点 > 左子节点，但因为直接获取不到左子节点，所以需要记录下当前节点，在下次循环中使用。
    // 第二次循环时，pre 就是上次的父节点，root.val 就是左子节点。
    if (root.val <= pre) {
      return false;
    }
    pre = root.val

    return test(root.right)
  }
};

/* 
[5,1,4,null,null,3,6] 5 [1] [4,3,6]
[1] 1 null null
[4,3,6] 4 [3] [6]
[3] 3 null null
[6] 6 null null
*/