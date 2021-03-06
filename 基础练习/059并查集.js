// JavaScript
// 参考 https://leetcode-cn.com/problems/friend-circles/solution/union-find-suan-fa-xiang-jie-by-labuladong/

class unionFind {
  constructor(n) {
    this.count = n;
    this.parent = new Array(n);
    this.size = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.size[i] = i;
    }
  }

  /* 返回节点 x 的根节点 */
  find(x) {
    while (this.parent[x] !== x) {
      // 进行路径压缩
      /* 
        假设 x = 1, 此时 1 --> 2 --> 3
        下面代码表示： 1 --> 3 <-- 2
        注意 2 依然指向 3 没有变。
      */
      this.parent[x] = this.parent[this.parent[x]]; 
      x = this.parent[x];
    }
    return x;
  }

  /* 将 p 和 q 连通 */
  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    if (rootP === rootQ) return;
    // 小树接到大树下面，较平衡
    if (this.size[rootP] > this.size[rootQ]) {
      this.parent[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    } else {
      this.parent[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    }
    this.count--;
  }

  /* 判断 p 和 q 是否互相连通 */
  connected(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    // 处于同一棵树上的节点，相互连通
    return rootP == rootQ;
  }
}