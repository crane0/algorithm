/* 
  https://leetcode-cn.com/problems/n-queens-ii/submissions/

  参考 https://leetcode-cn.com/problems/n-queens-ii/solution/nhuang-hou-ii-by-leetcode-solution/

  注意事项，列从左往右数（0表示左边第一列），对应的二进制是：从最低位往最高位（从右往左）！最右边的 0 表示 第一列。

  位运算替换 Set 判重。以 4 皇后为例，
  第一次，都是 0 ，bits = 1111 & 1111 = 1111，所以第一行 4 个位置都可以放皇后，
    while 循环中的计算，其实想表达：
      每次在 bits 中取出 1，1对应的位置 p 放皇后 （可以看到下探时 | p 了）。
      再清零刚刚取出 1 对应的位置，如果 bits 中还有 1（也就是 bits 不为 0），就继续循环。
    na（主对角线）需要 << 1，因为二进制的方向和棋盘方向相反！（参考上面的注意事项）
    同理，pie（副对角线）需要 >> 1

  主体逻辑就是这样，因为对位运算不熟，所以一步步推导，才大致理解。
*/
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let count = 0;
  void (function dfs(row = 0, cols = 0, na = 0, pie = 0) {
    if (row >= n) {
      count++;
      return;
    }
    
    /* 
      列，撇，捺，三个取或，表示所有被皇后占掉的格子。再取反，表示没有被占的格子赋值为 1
      (1 << n) - 1，把 n 皇后之前的那些高位全部赋值 0，因为不需要用到前面的位置。

      (1 << n) - 1 其实是为了第一次，（比如4皇后）谁 & 1111 还是自己。
    */
    let bits = ~(cols | na | pie) & ((1 << n) - 1);
    while (bits) {
      // 保留最低位的 1，（从最低位的 1 开始计算，1 对应可放置皇后的位置）
      let p = bits & -bits;
      // 清零最低位的 1，因为 p 位置已经放置了皇后，所以要清掉这个 1（bits 如果有多个 1，就能循环几次，也就是说，可以有多个地方试着放皇后）
      bits &= bits - 1;
      dfs(row + 1, cols | p, (na | p) << 1, (pie | p) >> 1);
    }
  })();
  return count;
};