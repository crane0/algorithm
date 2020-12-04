/* 
  https://leetcode-cn.com/problems/linked-list-cycle-ii/
  参考官方 https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode-solution/
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/* 
  空间复杂度 O(N)，因为用到了 set
*/
var detectCycle = function(head) {
  let set = new Set()
  while (head !== null) {
    if (set.has(head)) {
      return head
    }
    set.add(head)
    head = head.next
  }  
  return null
};

/* 
  快慢指针
  注意，慢指针入环后，第一圈之内，一定会遇到快指针。
  证明：设环的长度为A，慢指针在入环的时候快指针在环中的位置B(取值范围0到A-1),
  当快慢指针相遇时 [慢指针在环中走了C] ,有
      C % A = ( B + 2C) % A,等价于   // + 2C 是因为快指针走的是慢指针的 2 倍距离
      n * A + C = B + 2C,合并得
      C = n * A - B
      当 n = 1 时 , 0 <= C < A
  故慢指针在第一圈必定能和快指针相遇
  
  基于此，有以下推导：
  未成环部分 a, fast 在环内追上 slow 时，slow 在环内走的部分 b，环内剩下的部分 c
  假设 fast 已经走了 N 圈，此时 fast 走过的 a + b + N(b + c)
  又因为 slow 走的始终是 fast 的一半，所以 a + b + N(b + c) = 2(a + b)
  得到 a = c + (N-1)(b+c)
  对 fast 来说，因为 (N-1)(b+c) 已经走了，只需要再走剩下的 c，整体的距离就等于 a。
  因为此时 fast 和 slow 已经相遇了，所以剩下的 c 由 slow 走即可!
  此时，新定义一个 three 从头开始出发，和 slow 相遇的点（slow 会走完剩下的 c），就是入环的第一个节点。
*/
var detectCycle2 = function(head) {
  let slow = head, fast = head

  while (fast !== null) {
    slow = slow.next
    if (fast.next !== null) {
      fast = fast.next.next
    } else {
      return null // 没有环
    }
    if (slow === fast) {
      let three = head
      while (three !== slow) {
        three = three.next
        slow = slow.next
      }
      return three
    }
  }
  return null
};