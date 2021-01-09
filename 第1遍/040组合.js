/* 
  https://leetcode-cn.com/problems/combinations/
  解法：画图理解
  https://leetcode-cn.com/problems/combinations/solution/hui-su-suan-fa-jian-zhi-python-dai-ma-java-dai-ma-/
*/

/**
 * 搜索起点是有上界的，比如 n = 6, k = 4 时，当 begin == 4 时，没有必要再递归了。
 * 
 * 例如：n = 6 ，k = 4。
    queue.length == 1 的时候，接下来要选择 3 个数，搜索起点最大是 4，最后一个被选的组合是 [4, 5, 6]；
    queue.length == 2 的时候，接下来要选择 2 个数，搜索起点最大是 5，最后一个被选的组合是 [5, 6]；
    queue.length == 3 的时候，接下来要选择 1 个数，搜索起点最大是 6，最后一个被选的组合是 [6]；
    再如：n = 15 ，k = 4。
    queue.length == 1 的时候，接下来要选择 3 个数，搜索起点最大是 13，最后一个被选的是 [13, 14, 15]；
    queue.length == 2 的时候，接下来要选择 2 个数，搜索起点最大是 14，最后一个被选的是 [14, 15]；
    queue.length == 3 的时候，接下来要选择 1 个数，搜索起点最大是 15，最后一个被选的是 [15]；

    可以归纳出：
    搜索起点的上界 + 接下来要选择的元素个数 - 1 = n
    其中，接下来要选择的元素个数 = k - queue.length，整理得到：

    搜索起点的上界 = n - (k - queue.length) + 1
    所以，我们的剪枝过程就是：把 i <= n 改成 i <= n - (k - queue.length) + 1
 * 
 * 
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if (k <= 0 || n < k) {
    return []
  }
  let queue = [], ret = []
  dfs(n, k, 1, queue)
  return ret

  function dfs(n, k, begin, queue) {
    if (queue.length === k) {
      ret.push([...queue]) // 新的对象
      return
    }
    // for (let i = begin; i <= n; i++) {
    for (let i = begin; i <= n - (k - queue.length) + 1; i++) {
      queue.push(i)
      dfs(n, k, i+1, queue)
      queue.pop(i)
    }
  }
};


var combine = function(n, k) {
  if (k <= 0 || n < k) {
    return []
  }
  let queue = [], ret = []
  dfs(n, k, 1, queue)
  return ret

  function dfs(n, k, begin, queue) {
    // 已经考虑完所有的数
    if (k===0) {
      ret.push([...queue])
      return
    }
    // 剪枝：起点上界
    if (begin > n - k + 1) {
      return;
    }
    // 不选择 begin
    dfs(n, k, begin+1, queue)

    // 选择 begin，同时 k - 1
    queue.push(begin)
    dfs(n, k-1, begin+1, queue)
    // 上面的 dfs 执行完成得到结果后，pop 出添加的 begin，再跳出循环，再 pop
    queue.pop(begin)
  }
};

/* 
  [
    [2,4],
    [3,4],
    [2,3],
    [1,2],
    [1,3],
    [1,4],
  ]
*/
console.log(combine(4, 2))
