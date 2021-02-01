用于算法学习和练习

# 1，还有其他方法

2020.12.28 因为还没有复习到动态规划，014滑动窗口问题，先用笨办法解决的。
> 目前复习到第4遍。59/60 样例超出时间限制。

032目前只做了递归，DFS，还有其他的方式没有实现。

# 2 心得

1，哈希表

不一定要用对象来解决，像 [有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/) ，只对字母计数的话，用数组即可。通过 `str[i].codePointAt() - 'a'.codePointAt()` 。

2，堆

大顶堆，

用于求最小的前几个数，因为每次只需比较 heap[0] 即可，堆中其他的都是小于 heap[0] 的。

小顶堆，

用于求最大的前几个数（TOPK），因为每次只需比较 heap[0] 即可，堆中其他的都是大于 heap[0] 的。

TOPK 的问题，在生成 map 后，可以用 Array.from(map).sort 直接排序完成。
> Array.from 是从类数组对象或**可迭代对象**，创建一个新的浅拷贝数组实例。

3，递归

- 递归终止条件
- 当前层逻辑
- 下探（满足特定条件才能下探）
- 清理当前层逻辑

(32,40,41,42,44) 的求子集问题，都可以用 dfs 选择不选择，push 和 pop 的方式得到。

4，dfs
      
55零钱兑换中，`dfs(amount - i * coins[level], level + 1, count + i)` 第一个参数，如果直接计算，就不用再回溯：
``` js
let temp = amount
amount = amount - i * coins[level]
dfs(amount, level + 1, count + i)
amount = temp
```